export function validateEmail(email) {
  if (!email.trim()) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Invalid email address";
  }

  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return "";
}

export function validateConfirmPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return "";
}
