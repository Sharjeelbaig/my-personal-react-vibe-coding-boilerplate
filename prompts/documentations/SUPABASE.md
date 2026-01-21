# Supabase Integration

## Setup
1. Create project at [supabase.com](https://supabase.com)
2. Add to `.env`:
```env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

## Client
```tsx
import { supabase } from "@/lib/supabase";
```

## Queries

### Select All
```tsx
const { data, error } = await supabase
  .from("todos")
  .select("*");
```

### Select with Filter
```tsx
const { data, error } = await supabase
  .from("todos")
  .select("*")
  .eq("user_id", userId)
  .order("created_at", { ascending: false });
```

### Select Single (must exist)
```tsx
const { data, error } = await supabase
  .from("users")
  .select("*")
  .eq("id", userId)
  .single();
```

### Select Single (may not exist)
```tsx
const { data, error } = await supabase
  .from("users")
  .select("*")
  .eq("id", userId)
  .maybeSingle();
```

### Insert
```tsx
const { data, error } = await supabase
  .from("todos")
  .insert({ title: "New todo", completed: false })
  .select()
  .single();
```

### Update
```tsx
const { error } = await supabase
  .from("todos")
  .update({ completed: true })
  .eq("id", todoId);
```

### Delete
```tsx
const { error } = await supabase
  .from("todos")
  .delete()
  .eq("id", todoId);
```

## Authentication

### Sign Up
```tsx
const { data, error } = await supabase.auth.signUp({
  email: "user@example.com",
  password: "password123",
});
```

### Sign In
```tsx
const { data, error } = await supabase.auth.signInWithPassword({
  email: "user@example.com",
  password: "password123",
});
```

### Sign Out
```tsx
await supabase.auth.signOut();
```

### Get Current User
```tsx
const { data: { user } } = await supabase.auth.getUser();
```

### Auth Hook
```tsx
// src/lib/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}
```

## Types
```tsx
// src/lib/types/database.ts
export interface Todo {
  id: string;
  user_id: string;
  title: string;
  completed: boolean;
  created_at: string;
}
```
