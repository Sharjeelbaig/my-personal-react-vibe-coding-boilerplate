# Database (PGLite + Hono)

## Architecture
- **Frontend**: React app at `localhost:5173`
- **Backend**: Hono server at `localhost:3000`
- **Database**: PGLite (embedded Postgres) in server

## Server Setup
```bash
cd server && bun install && bun run index.ts
```

## API Client
```tsx
import { api } from "@/lib/api";

// GET
const users = await api.get<User[]>("/api/users");

// POST
const user = await api.post<User>("/api/users", { id, email, name });

// PUT
await api.put("/api/users/123", { name: "Updated" });

// DELETE
await api.delete("/api/users/123");
```

## Data Hook Pattern
```tsx
// src/features/users/hooks/useUsers.ts
import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface User {
  id: string;
  email: string;
  name: string;
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<User[]>("/api/users")
      .then(setUsers)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  async function add(user: Omit<User, "id">) {
    const newUser = await api.post<User>("/api/users", { ...user, id: crypto.randomUUID() });
    setUsers([newUser, ...users]);
  }

  async function remove(id: string) {
    await api.delete(`/api/users/${id}`);
    setUsers(users.filter((u) => u.id !== id));
  }

  return { users, loading, error, add, remove };
}
```

## Adding Server Endpoints
```tsx
// server/index.ts
app.get("/api/todos", async (c) => {
  const { rows } = await db.query("SELECT * FROM todos ORDER BY created_at DESC");
  return c.json(rows);
});

app.post("/api/todos", async (c) => {
  const { title } = await c.req.json();
  const id = crypto.randomUUID();
  await db.query("INSERT INTO todos (id, title) VALUES ($1, $2)", [id, title]);
  return c.json({ id, title }, 201);
});
```

## Migrations
Add to server startup in `index.ts`:
```tsx
await db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
  );
`);
```
