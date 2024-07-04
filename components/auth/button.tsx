"use client";

import React from "react";

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
      className={`${className} rounded-md py-2 font-semibold transition hover:opacity-80`}
    >
      {children}
    </button>
  );
};
