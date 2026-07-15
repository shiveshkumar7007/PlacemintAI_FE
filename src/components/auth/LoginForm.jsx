import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

import { loginUser } from "../../services/authService";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const userData = {
        email,
        password,
      };

      // Call your Express backend
      await loginUser(userData);

      // If successful, show a toast and navigate to the dashboard
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      // If it fails (like a 401 Unauthorized), show the error toast
      toast.error(error.response?.data?.message || "Invalid email or password");
    } finally {
      // Turn off the loader whether it succeeds or fails
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={Mail}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors((prev) => ({
            ...prev,
            email: "",
          }));
        }}
        error={errors.email}
      />

      {/* Password */}
      <InputField
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        icon={Lock}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrors((prev) => ({
            ...prev,
            password: "",
          }));
        }}
        error={errors.password}
        rightIcon={showPassword ? EyeOff : Eye}
        onRightIconClick={() => {
          setShowPassword((prev) => !prev);
        }}
      />

      {/* Options */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-slate-400">
          <input type="checkbox" className="h-4 w-4 accent-cyan-500" />
          Remember me
        </label>

        <Link to="/forgot-password" className="text-cyan-400 hover:underline">
          Forgot Password?
        </Link>
      </div>

      {/* Login Button */}
      <Button type="submit" loading={loading}>
        Login
      </Button>

      {/* Divider */}
      <div className="flex items-center">
        <div className="h-px flex-1 bg-slate-700" />
        <span className="mx-4 text-sm text-slate-500">OR</span>
        <div className="h-px flex-1 bg-slate-700" />
      </div>

      {/* Google */}
      <Button
        type="button"
        variant="secondary"
        className="flex items-center justify-center gap-3"
      >
        <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
        Continue with Google
      </Button>

      {/* Signup Link */}
      <p className="text-center text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-cyan-400 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
