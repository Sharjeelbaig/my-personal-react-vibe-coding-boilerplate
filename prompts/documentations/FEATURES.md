# Creating Features

## Feature Structure
```
src/features/todos/
├── index.tsx           # Main export
├── components/
│   ├── TodoList.tsx
│   └── TodoItem.tsx
└── hooks/
    └── useTodos.ts
```

## Step 1: Create Feature Folder
```bash
mkdir -p src/features/todos/components src/features/todos/hooks
```

## Step 2: Create Hook
```tsx
// src/features/todos/hooks/useTodos.ts
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetch() {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) setError(error.message);
      else setTodos(data || []);
      setLoading(false);
    }
    fetch();
  }, []);

  async function addTodo(title: string) {
    const { data, error } = await supabase
      .from("todos")
      .insert({ title, completed: false })
      .select()
      .single();
    
    if (data) setTodos([data, ...todos]);
    return { data, error };
  }

  return { todos, loading, error, addTodo };
}
```

## Step 3: Create Components
```tsx
// src/features/todos/components/TodoItem.tsx
import { Check, Trash } from "iconoir-react";
import Button from "@/components/ui/Button";

interface TodoItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ title, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded bg-card border border-border">
      <Button size="icon" variant={completed ? "primary" : "ghost"} onClick={onToggle} icon={<Check />} />
      <span className={`flex-1 ${completed ? "line-through text-muted-foreground" : ""}`}>{title}</span>
      <Button size="icon" variant="ghost" onClick={onDelete} icon={<Trash />} />
    </div>
  );
}
```

## Step 4: Create Index
```tsx
// src/features/todos/index.tsx
import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import TodoItem from "./components/TodoItem";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function TodosFeature() {
  const { todos, loading, addTodo } = useTodos();
  const [title, setTitle] = useState("");

  async function handleAdd() {
    if (!title.trim()) return;
    await addTodo(title);
    setTitle("");
  }

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <Card>
      <h2 className="text-heading mb-4">Todos</h2>
      <div className="flex gap-2 mb-4">
        <Input value={title} onChange={setTitle} placeholder="New todo..." />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onToggle={() => {}} onDelete={() => {}} />
        ))}
      </div>
    </Card>
  );
}
```

## Step 5: Use in App
```tsx
import TodosFeature from "./features/todos";

<TodosFeature />
```
