# Examples

## Complete Feature Example

### 1. Create Feature Structure
```bash
src/features/todos/
├── components/
│   ├── TodoList.tsx
│   └── TodoItem.tsx
├── hooks/
│   └── useTodos.ts
└── index.tsx
```

### 2. Custom Hook (useTodos.ts)
```tsx
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setTodos(data);
    setLoading(false);
  }

  async function addTodo(title: string) {
    const { data, error } = await supabase
      .from('todos')
      .insert({ title, completed: false })
      .select()
      .single();

    if (data) setTodos([data, ...todos]);
  }

  async function toggleTodo(id: string, completed: boolean) {
    const { error } = await supabase
      .from('todos')
      .update({ completed })
      .eq('id', id);

    if (!error) {
      setTodos(todos.map(t => t.id === id ? { ...t, completed } : t));
    }
  }

  return { todos, loading, addTodo, toggleTodo };
}
```

### 3. Component (TodoList.tsx)
```tsx
import { useTodos } from '../hooks/useTodos';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, loading, toggleTodo } = useTodos();

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
        />
      ))}
    </div>
  );
}
```

### 4. Feature Entry (index.tsx)
```tsx
import TodoList from './components/TodoList';

export default function TodosFeature() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Todos</h1>
      <TodoList />
    </div>
  );
}
```

### 5. Use in App
```tsx
import TodosFeature from './features/todos';

function App() {
  return <TodosFeature />;
}
```

## UI Component Example

### Button.tsx
```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
}
```
