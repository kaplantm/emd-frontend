import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl bg-brand-dark-green outline-10 md:outline-15  outline-white shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
