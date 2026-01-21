import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddings = { none: "", sm: "p-3", md: "p-default", lg: "p-6" };

export default function Card({ children, className = "", padding = "md" }: CardProps) {
  return (
    <div className={`rounded border border-border bg-card text-card-foreground shadow-sm ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}
