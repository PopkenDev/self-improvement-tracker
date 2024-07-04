import { forwardRef } from "react";

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
  variant: "authentication" | "default";
  className?: string;
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, required = false, placeholder, variant, className, name, ...props },
    ref,
  ) => {
    if (!variant) return null;
    return (
      <input
        {...props}
        ref={ref}
        type={type}
        name={name}
        className={`px-4 py-2.5 placeholder:text-white/40 ${inputVariants[variant]} ${className}`}
        placeholder={placeholder}
        required={required}
      />
    );
  },
);

Input.displayName = "Input";
