import { ReactNode } from "react";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h2
      className={`text-xl md:text-2xl font-bold text-white flex items-center ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default CardTitle;
