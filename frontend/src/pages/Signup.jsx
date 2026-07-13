import AuthLayout from "../components/layout/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

function Signup() {
  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Start your placement preparation journey."
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;
