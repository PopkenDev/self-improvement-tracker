interface FormLabelProps {
  children: React.ReactNode;
  name: string;
  className?: string;
}

export const FormLabel = ({ children, name, className }: FormLabelProps) => {
  return (
    <label
      htmlFor={name}
      className={`${className} text-sm font-semibold text-[#efefef]`}
    >
      {children}
    </label>
  );
};
