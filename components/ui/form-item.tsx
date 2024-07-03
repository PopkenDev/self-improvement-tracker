interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export const FormItem = ({ children, className }: FormItemProps) => {
  return <div className={`${className} flex flex-col gap-y-2`}>{children}</div>;
};
