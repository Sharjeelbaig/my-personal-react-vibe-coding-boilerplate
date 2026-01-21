# Common Mistakes

## ❌ Hardcoding Colors
```tsx
// WRONG
<div className="bg-gray-900 text-gray-100" />
<button className="bg-blue-600 text-white" />

// CORRECT
<div className="bg-background text-foreground" />
<button className="bg-primary text-primary-foreground" />
```

## ❌ Wrong Icon Library
```tsx
// WRONG
import { Search } from "lucide-react";
import { FaSearch } from "react-icons/fa";

// CORRECT
import { Search } from "iconoir-react";
```

## ❌ Not Using Existing Components
```tsx
// WRONG - recreating button
<button className="px-4 py-2 bg-blue-600 rounded">Click</button>

// CORRECT
import Button from "@/components/ui/Button";
<Button>Click</Button>
```

## ❌ Inline Fetch in Components
```tsx
// WRONG
function Component() {
  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then(setData);
  }, []);
}

// CORRECT - use hook
function Component() {
  const { data, loading } = useData();
}
```

## ❌ Missing Loading/Error States
```tsx
// WRONG
function TodoList() {
  const { data } = useTodos();
  return data.map(t => <div>{t.title}</div>);
}

// CORRECT
function TodoList() {
  const { data, loading, error } = useTodos();
  if (loading) return <p className="text-muted-foreground">Loading...</p>;
  if (error) return <p className="text-destructive">{error}</p>;
  return data.map(t => <div>{t.title}</div>);
}
```

## ❌ Putting Files in Wrong Places
```tsx
// WRONG
src/components/TodoList.tsx     // Feature in components
src/components/useTodos.ts      // Hook in components

// CORRECT
src/features/todos/components/TodoList.tsx
src/features/todos/hooks/useTodos.ts
```

## ❌ Using any Type
```tsx
// WRONG
const [data, setData] = useState<any>(null);

// CORRECT
const [data, setData] = useState<User | null>(null);
```

## ❌ Adding Unnecessary Dependencies
```tsx
// WRONG - don't add these unless specifically needed
import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";

// CORRECT - use built-in patterns
const [state, setState] = useState();
```

## ❌ Hardcoding API Keys
```tsx
// WRONG
fetch("https://api.com?key=abc123");

// CORRECT
fetch(`https://api.com?key=${import.meta.env.VITE_API_KEY}`);
```

## ❌ Missing Form Validation
```tsx
// WRONG
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  await save(form);
}

// CORRECT
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  if (!form.email.includes("@")) {
    setError("Invalid email");
    return;
  }
  await save(form);
}
```

## ❌ Not Using Semantic Tokens
```tsx
// WRONG - magic numbers
<div className="p-4 gap-3 text-sm" />

// CORRECT - semantic values
<div className="p-default gap-default text-caption" />
```

## ❌ Forgetting Dark Mode
```tsx
// WRONG - only works in one mode
<div className="bg-white text-black" />

// CORRECT - works in both modes
<div className="bg-background text-foreground" />
```
