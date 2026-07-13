function InputField({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
  rightIcon: RightIcon,
  onRightIconClick,
  autoComplete,
}) {
  return (
    <div>
      {/* Label */}

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      {/* Input Container */}

      <div
        className={`
          flex items-center rounded-xl border bg-slate-950 px-4 transition
          focus-within:ring-2 focus-within:ring-cyan-400/30

          ${
            error
              ? "border-red-500"
              : "border-slate-700 focus-within:border-cyan-400"
          }
        `}
      >
        {/* Left Icon */}

        {Icon && (
          <Icon
            size={18}
            className="text-slate-400"
          />
        )}

        {/* Input */}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="
            w-full
            bg-transparent
            px-3
            py-3
            text-white
            caret-cyan-400
            placeholder:text-slate-500
            outline-none
          "
        />

        {/* Right Icon */}

        {RightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="text-slate-400 transition hover:text-cyan-400"
          >
            <RightIcon size={20} />
          </button>
        )}
      </div>


      {/* Error */}

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;