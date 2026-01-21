# Data Fetching Decisions

## Primary Method
- **API Client** for all database operations via Hono server
- Server uses PGLite (embedded Postgres)
- Firebase for authentication

## Pattern
- Create custom hooks in `/src/lib/hooks/` for data fetching logic
- Handle loading and error states explicitly
- Use `api.get()`, `api.post()`, `api.delete()` from `@/lib/api`

## Example
```tsx
import { api } from "@/lib/api";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/todos")
      .then(setTodos)
      .finally(() => setLoading(false));
  }, []);

  return { todos, loading };
}
```
