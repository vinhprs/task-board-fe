import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase leading-none ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
