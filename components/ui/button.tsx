"use client";

import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const buttonVariants = {
  default:
    "bg-emerald-600 rounded-mdpy-2 px-4 font-normal transition text-sm text-white hover:opacity-80",
  icon: "bg-emerald-600 w-10 h-10 rounded-full flex justify-center items-center transition hover:opacity-80",
};

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  disabled?: boolean;
  className?: string;
  variant?: "default" | "icon";
}

export const Button = ({
  children,
  type,
  disabled = false,
  className,
  variant,
}: ButtonProps) => {
  if (!variant) return null;
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} ${font.className} ${buttonVariants[variant]} rounded-md py-2 font-semibold transition hover:opacity-80`}
    >
      {children}
    </button>
  );
};
