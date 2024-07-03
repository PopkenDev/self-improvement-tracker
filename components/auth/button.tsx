"use client";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  children,
  type,
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} rounded-md py-2 font-semibold hover:opacity-80 transition`}
    >
      {children}
    </button>
  );
};

// 1) Variant
// 2) Type
// 3) onClick
// 4) disabled
// 5) className
// 6) children
