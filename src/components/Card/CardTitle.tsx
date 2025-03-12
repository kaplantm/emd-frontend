import { ReactNode } from "react";

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-xl md:text-2xl font-bold text-white flex items-center ${className}`}
    >
      {children}
    </h2>
  );
};

export default CardTitle;
