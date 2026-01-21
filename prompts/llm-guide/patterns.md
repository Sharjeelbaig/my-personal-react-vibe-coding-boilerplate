# Code Patterns

## Component Pattern
```tsx
interface ComponentProps {
  title: string;
  onAction: () => void;
}

export default function Component({ title, onAction }: ComponentProps) {
  const [state, setState] = useState(initialValue);

  return (
    <div className="p-4">
      <h2>{title}</h2>
      <button onClick={onAction}>Action</button>
    </div>
  );
}
```

## Custom Hook Pattern
```tsx
import { api } from "@/lib/api";

export function useResource() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/api/resource")
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
```

## Feature Index Pattern
```tsx
// features/todos/index.tsx
import TodoList from './components/TodoList';

export default function TodosFeature() {
  return (
    <div>
      <TodoList />
    </div>
  );
}
```

## API Query Pattern
```tsx
import { api } from "@/lib/api";

// GET list
const users = await api.get<User[]>("/api/users");

// GET single
const user = await api.get<User>("/api/users/123");

// POST
const newTodo = await api.post<Todo>("/api/todos", { title });

// DELETE
await api.delete("/api/todos/123");
```
