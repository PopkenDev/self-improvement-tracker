const inputVariants = {
  authentication:
    "bg-gradient-to-r from-[#02150f] from-5% to-emerald-800 to-55% w-full outline-none rounded-md pl-12 text-white",
  default:
    "rounded-md bg-[#121212] light-shadow outline-none w-full text-white",
};

interface InputProps {
  type: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  onChange: () => void;
  variant: "authentication" | "default";
  className?: string;
}

export const Input = ({
  type,
  required = true,
  placeholder,
  onChange,
  variant,
  className,
}: InputProps) => {
  if (!variant) return null;
  return (
    <input
      onChange={onChange}
      type={type}
      className={`px-4 py-2.5 placeholder:text-white/80 ${inputVariants[variant]} ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
};
