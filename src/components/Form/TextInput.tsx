import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextInput: React.FC<InputProps> = ({ id, className = "", ...props }) => {
  return (
    <input
      id={id}
      className={`text-sm w-full px-6 bg-white py-2 border-1 border-gray-300 rounded-2xl focus:outline-none focus:border-brand-dark-green transition-all duration-300 text-lg ${className}`}
      {...props}
    />
  );
};

export default TextInput;
