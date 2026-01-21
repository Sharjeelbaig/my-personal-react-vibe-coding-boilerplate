# Data Fetching Decisions

## Primary Method
- **Supabase Client** for all database operations
- Direct queries from components using `supabase.from()`
- Real-time subscriptions when live updates are needed

## Pattern
- Create custom hooks in `/src/lib/hooks/` for data fetching logic
- Handle loading and error states explicitly
- Use `maybeSingle()` for optional single row queries
- Use `single()` only when row existence is guaranteed

## Example
```tsx
// Custom hook
export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) setTodos(data);
      setLoading(false);
    }
    fetchTodos();
  }, []);

  return { todos, loading };
}
```
