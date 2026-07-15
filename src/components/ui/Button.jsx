function Button({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  onClick,
  className = "",
}) {
  const variants = {
    primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",

    secondary:
      "border border-slate-700 bg-transparent text-white hover:border-cyan-400 hover:bg-slate-800",

    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        w-full
        rounded-xl
        py-3
        font-semibold
        transition
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
