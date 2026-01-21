# TypeScript Patterns

## Component Props
```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({ children, onClick, disabled, variant = "primary" }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{children}</button>;
}
```

## Extending HTML Elements
```tsx
interface InputProps extends Omit<React.ComponentProps<"input">, "onChange"> {
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
}
```

## Data Types
```tsx
// src/lib/types/database.ts
export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Todo {
  id: string;
  user_id: string;
  title: string;
  completed: boolean;
  created_at: string;
}
```

## Hook Return Types
```tsx
interface UseTodosReturn {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  add: (title: string) => Promise<void>;
}

export function useTodos(): UseTodosReturn {
  // ...
}
```

## Event Types
```tsx
function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
}

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setValue(e.target.value);
}

function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  // ...
}
```

## Generic Components
```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map(renderItem)}</>;
}
```

## Nullable State
```tsx
const [user, setUser] = useState<User | null>(null);
const [error, setError] = useState<string | null>(null);
```

## Type Imports
```tsx
import type { User, Todo } from "@/lib/types/database";
import type { ReactNode, ComponentProps } from "react";
```

## ❌ NEVER
```tsx
// WRONG - any type
const [data, setData] = useState<any>(null);

// WRONG - missing types
function Button({ children, onClick }) { }

// WRONG - inline object types
function User({ user }: { user: { id: string; name: string; email: string } }) { }
```

## ✅ ALWAYS
```tsx
// CORRECT - explicit type
const [data, setData] = useState<User | null>(null);

// CORRECT - interface
interface ButtonProps { children: ReactNode; onClick?: () => void; }

// CORRECT - imported type
import type { User } from "@/lib/types/database";
function UserCard({ user }: { user: User }) { }
```
