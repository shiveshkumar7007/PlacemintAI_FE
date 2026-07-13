import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

import InputField from "../ui/InputField";
import Button from "../ui/Button";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,

      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    console.log(formData);

    // Later:
    // await api.post("/auth/signup",formData)

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Full Name"
        placeholder="Enter your name"
        icon={User}
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={Mail}
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Create password"
        icon={Lock}
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        rightIcon={showPassword ? EyeOff : Eye}
        onRightIconClick={() => {
          setShowPassword((prev) => !prev);
        }}
      />

      <InputField
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        icon={Lock}
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <Button type="submit" loading={loading}>
        Create Account
      </Button>

      <p className="text-center text-slate-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-cyan-400 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignupForm;
