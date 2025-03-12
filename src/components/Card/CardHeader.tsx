import { ReactNode } from "react";

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
}) => {
  return <div className={`px-8 py-6 ${className}`}>{children}</div>;
};

export default CardHeader;
