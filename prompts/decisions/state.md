# State Management Decisions

## Approach
- **React hooks** (useState, useReducer) for local state
- **Context API** for shared state within features
- **Supabase Realtime** for server state synchronization
- No Redux, Zustand, or other state libraries unless specifically needed

## Guidelines
- Keep state close to where it's used
- Lift state only when necessary
- Use custom hooks to encapsulate stateful logic
- Server state lives in Supabase, not client state

## Example
```tsx
// Local state
const [count, setCount] = useState(0);

// Shared state via context
const { user } = useAuth();

// Server state
const { data, error } = useQuery('todos', fetchTodos);
```
