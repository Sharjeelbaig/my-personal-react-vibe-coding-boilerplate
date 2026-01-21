# Third-Party API Integration

## Pattern: Create a Hook
```tsx
// src/lib/hooks/useWeather.ts
import { useState, useEffect } from "react";

interface Weather {
  temp: number;
  description: string;
}

export function useWeather(city: string) {
  const [data, setData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await fetch(`https://api.weather.com/v1?city=${city}&key=${import.meta.env.VITE_WEATHER_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch");
        setData(await res.json());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error");
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [city]);

  return { data, loading, error };
}
```

## Usage
```tsx
import { useWeather } from "@/lib/hooks/useWeather";

function WeatherCard() {
  const { data, loading, error } = useWeather("London");

  if (loading) return <p className="text-muted-foreground">Loading...</p>;
  if (error) return <p className="text-destructive">{error}</p>;

  return (
    <Card>
      <h2 className="text-heading">{data?.temp}°</h2>
      <p className="text-muted-foreground">{data?.description}</p>
    </Card>
  );
}
```

## Environment Variables
```env
# .env
VITE_WEATHER_KEY=abc123
VITE_STRIPE_KEY=pk_test_xxx
```

Access in code:
```tsx
const key = import.meta.env.VITE_WEATHER_KEY;
```

## API Client Wrapper
```tsx
// src/lib/api.ts
const BASE_URL = import.meta.env.VITE_API_URL;

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, data: unknown) => request<T>(endpoint, { method: "POST", body: JSON.stringify(data) }),
  put: <T>(endpoint: string, data: unknown) => request<T>(endpoint, { method: "PUT", body: JSON.stringify(data) }),
  delete: <T>(endpoint: string) => request<T>(endpoint, { method: "DELETE" }),
};
```

## ❌ NEVER
```tsx
// WRONG - fetch in component directly
function Component() {
  useEffect(() => {
    fetch("https://api.example.com/data").then(r => r.json()).then(setData);
  }, []);
}

// WRONG - hardcode API keys
fetch("https://api.com?key=abc123");
```

## ✅ ALWAYS
```tsx
// CORRECT - use hook
const { data, loading } = useData();

// CORRECT - use env vars
fetch(`${url}?key=${import.meta.env.VITE_API_KEY}`);
```
