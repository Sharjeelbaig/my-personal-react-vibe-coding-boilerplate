# Naming Conventions

## Components
```tsx
// Feature components
TodoList.tsx
TodoItem.tsx
TodoForm.tsx

// UI components
Button.tsx
Input.tsx
Card.tsx
Modal.tsx
```

## Hooks
```tsx
// Data hooks
useTodos.ts
useUser.ts
useProjects.ts

// Utility hooks
useDebounce.ts
useLocalStorage.ts
useClickOutside.ts
```

## Functions
```tsx
// Handlers
handleSubmit
handleClick
handleChange

// Utilities
formatDate
parseJSON
validateEmail

// Queries
fetchTodos
createTodo
updateTodo
deleteTodo
```

## Types/Interfaces
```tsx
// Database types
type Todo = { ... }
type User = { ... }

// Component props
interface ButtonProps { ... }
interface TodoListProps { ... }

// API responses
interface ApiResponse<T> { ... }
```

## Variables
```tsx
// State
const [isLoading, setIsLoading] = useState(false);
const [hasError, setHasError] = useState(false);
const [todos, setTodos] = useState([]);

// Constants
const MAX_ITEMS = 100;
const API_BASE_URL = '...';
const DEFAULT_TIMEOUT = 5000;
```

## Files & Folders
```bash
# Features
features/todos/
features/auth/
features/dashboard/

# Components
components/ui/Button.tsx
components/ui/Input.tsx

# Hooks
lib/hooks/useTodos.ts
features/todos/hooks/useTodoForm.ts

# Utils
lib/utils/formatDate.ts
lib/utils/validation.ts
```
