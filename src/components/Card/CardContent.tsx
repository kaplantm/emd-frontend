import { ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`px-6 py-6 bg-brand-cream ${className}`}>{children}</div>
  );
};

export default CardContent;
