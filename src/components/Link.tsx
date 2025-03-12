import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      className={`text-brand-pink hover:underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
