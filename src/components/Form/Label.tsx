import { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "className"> {
  children: ReactNode;
  required?: boolean;
  className?: string;
}

// Custom Label component
const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  required,
  className = "",
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-md font-medium text-brand-dark-green ${className}`}
      {...props}
    >
      {children}
      {required && "*"}
    </label>
  );
};

export default Label;
