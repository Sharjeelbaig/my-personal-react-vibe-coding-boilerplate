# UI Components

## Available Components
```tsx
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
```

## Button
```tsx
// Variants: primary | secondary | destructive | ghost | outline
// Sizes: sm | md | lg | icon
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>

// With icon
import { Plus } from "iconoir-react";
<Button icon={<Plus />}>Add Item</Button>
<Button icon={<Plus />} iconPosition="right">Add</Button>
<Button size="icon" icon={<Plus />} />

// States
<Button disabled>Disabled</Button>
```

## Input
```tsx
<Input placeholder="Email" />
<Input label="Email" placeholder="you@example.com" />
<Input label="Password" type="password" />
<Input label="Search" icon={<Search />} />
<Input error="Required field" />
<Input disabled />
```

## Card
```tsx
// Padding: none | sm | md | lg
<Card>Default padding (12px)</Card>
<Card padding="lg">Large padding</Card>
<Card padding="none">No padding</Card>
```

## Creating New Components
```tsx
// src/components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
}

const variants = {
  default: "bg-secondary text-secondary-foreground",
  success: "bg-green-500/20 text-green-500",
  warning: "bg-yellow-500/20 text-yellow-500",
  error: "bg-destructive/20 text-destructive",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded px-2 py-0.5 text-caption ${variants[variant]}`}>
      {children}
    </span>
  );
}
```

## ❌ NEVER
```tsx
// WRONG - don't recreate existing components
<button className="px-4 py-2 bg-primary...">Click</button>

// WRONG - don't hardcode colors
<div className="bg-blue-600 text-white">...</div>
```

## ✅ ALWAYS
```tsx
// CORRECT - use existing components
<Button>Click</Button>

// CORRECT - use tokens
<div className="bg-primary text-primary-foreground">...</div>
```
