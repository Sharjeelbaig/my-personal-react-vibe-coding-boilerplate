# Quick Reference

## Imports
```tsx
// UI Components
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

// Layouts
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { AuthLayout } from "@/components/layouts/AuthLayout";

// Icons
import { Search, Plus, Xmark, Menu, Check } from "iconoir-react";

// Supabase
import { supabase } from "@/lib/supabase";
```

## Color Tokens
| Background | Text |
|------------|------|
| `bg-background` | `text-foreground` |
| `bg-card` | `text-card-foreground` |
| `bg-primary` | `text-primary-foreground` |
| `bg-secondary` | `text-secondary-foreground` |
| `bg-accent` | `text-accent-foreground` |
| `bg-muted` | `text-muted-foreground` |
| `bg-destructive` | `text-destructive-foreground` |

## Typography
| Class | Size |
|-------|------|
| `text-heading` | 24px |
| `text-body` | 16px |
| `text-caption` | 12px |

## Spacing
| Class | Value |
|-------|-------|
| `p-default` | 12px |
| `gap-default` | 12px |
| `space-y-default` | 12px |

## Button
```tsx
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
<Button icon={<Plus />}>With Icon</Button>
<Button size="icon" icon={<Plus />} />
```

## Input
```tsx
<Input placeholder="Basic" />
<Input label="With Label" />
<Input error="Error message" />
<Input icon={<Search />} />
<Input disabled />
```

## Card
```tsx
<Card>Default</Card>
<Card padding="lg">Large</Card>
<Card padding="none">None</Card>
```

## Supabase
```tsx
// Select
const { data } = await supabase.from("table").select("*");

// Insert
await supabase.from("table").insert({ field: value });

// Update
await supabase.from("table").update({ field: value }).eq("id", id);

// Delete
await supabase.from("table").delete().eq("id", id);

// Auth
await supabase.auth.signInWithPassword({ email, password });
await supabase.auth.signOut();
```

## State
```tsx
const [value, setValue] = useState("");
const [loading, setLoading] = useState(false);
const [items, setItems] = useState<Item[]>([]);
```

## Dark Mode
```tsx
const [dark, setDark] = useState(true);
<div className={dark ? "dark" : ""}>{content}</div>
```
