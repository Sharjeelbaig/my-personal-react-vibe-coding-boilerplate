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
export function useResource() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await supabase.from('table').select();
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetch();
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

## Supabase Query Pattern
```tsx
// Single row (optional)
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)
  .maybeSingle();

// Multiple rows
const { data, error } = await supabase
  .from('todos')
  .select('*')
  .order('created_at', { ascending: false });

// Insert
const { data, error } = await supabase
  .from('todos')
  .insert({ title, completed: false })
  .select()
  .single();
```
