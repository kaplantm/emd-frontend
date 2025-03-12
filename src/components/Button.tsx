import { ButtonHTMLAttributes, ReactNode } from "react";
import LoaderIcon from "./svg/LoaderIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled,
  loading,
  ...props
}) => {
  return (
    <button
      className={`bg-brand-pink text-white px-4 py-2 rounded-full min-w-1/2 flex items-center justify-center min-h-[2.5rem]
    hover:bg-brand-deep-pink
    disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
    ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <LoaderIcon /> : children}
    </button>
  );
};

export default Button;
