import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your placement journey."
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
