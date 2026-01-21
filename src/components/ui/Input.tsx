import type { ComponentProps, ReactNode } from "react";

interface InputProps extends Omit<ComponentProps<"input">, "onChange"> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  onChange?: (value: string) => void;
}

export default function Input({
  label,
  error,
  icon,
  onChange,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-caption font-medium text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>}
        <input
          id={inputId}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          className={`h-10 w-full rounded border border-input bg-background px-3 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${icon ? "pl-10" : ""} ${error ? "border-destructive" : ""} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-caption text-destructive">{error}</p>}
    </div>
  );
}
