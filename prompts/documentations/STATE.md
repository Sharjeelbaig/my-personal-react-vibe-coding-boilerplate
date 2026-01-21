# State Management

## Rule: Start Simple
1. Use `useState` for component state
2. Lift state up when needed
3. Only add global state when necessary

## Local State
```tsx
const [count, setCount] = useState(0);
const [items, setItems] = useState<Item[]>([]);
const [isOpen, setIsOpen] = useState(false);
```

## Lifting State
```tsx
// Parent holds state
function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <TodoForm onAdd={(title) => setTodos([...todos, { id: Date.now(), title }])} />
      <TodoList todos={todos} />
    </>
  );
}

// Child receives props
function TodoList({ todos }: { todos: Todo[] }) {
  return todos.map(t => <TodoItem key={t.id} {...t} />);
}
```

## Loading/Error States
```tsx
const [data, setData] = useState<Data | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
```

## Form State
```tsx
const [form, setForm] = useState({ name: "", email: "" });

<Input 
  value={form.name} 
  onChange={(v) => setForm({ ...form, name: v })} 
/>
```

## Custom Hook for Complex State
```tsx
function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const add = (title: string) => setTodos([...todos, { id: Date.now(), title }]);
  const remove = (id: number) => setTodos(todos.filter(t => t.id !== id));
  const toggle = (id: number) => setTodos(todos.map(t => 
    t.id === id ? { ...t, completed: !t.completed } : t
  ));

  return { todos, loading, add, remove, toggle };
}
```

## When to Add Global State
Only when:
- Multiple unrelated components need same data
- State survives route changes
- Auth/user data needed everywhere

## Global State (Context)
```tsx
// src/lib/context/ThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  dark: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
}
```

## ❌ NEVER
```tsx
// WRONG - don't add Redux/Zustand by default
import { create } from "zustand";

// WRONG - global state for local concerns
const useCounterStore = create(() => ({ count: 0 }));
```

## ✅ ALWAYS
```tsx
// CORRECT - start with useState
const [count, setCount] = useState(0);

// CORRECT - lift state when needed
<Parent todos={todos} setTodos={setTodos}>
```
