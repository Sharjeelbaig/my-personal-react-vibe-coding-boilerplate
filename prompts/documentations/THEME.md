# Theme System

## Toggle Dark/Light
```tsx
const [dark, setDark] = useState(true);
<div className={dark ? "dark" : ""}>
  {/* content */}
</div>
```

## Color Tokens (USE THESE)
| Token | Usage |
|-------|-------|
| `bg-background` | Page/app background |
| `bg-card` | Cards, dialogs, surfaces |
| `bg-primary` | Primary buttons |
| `bg-secondary` | Secondary elements |
| `bg-accent` | Hover states |
| `bg-muted` | Subtle backgrounds |
| `bg-destructive` | Danger/delete |
| `text-foreground` | Main text |
| `text-muted-foreground` | Subtle/caption text |
| `text-primary-foreground` | Text on primary bg |
| `border-border` | Default borders |
| `border-input` | Form inputs |
| `ring-ring` | Focus rings |

## Typography
| Class | Size |
|-------|------|
| `text-heading` | 24px |
| `text-body` | 16px |
| `text-caption` | 12px |

## Spacing
```tsx
<div className="p-default">12px padding</div>
<div className="gap-default">12px gap</div>
<div className="space-y-default">12px vertical spacing</div>
```

## ❌ NEVER DO THIS
```tsx
// WRONG - hardcoded colors
<div className="bg-gray-900 text-gray-100" />
<button className="bg-blue-600 text-white" />
<p className="text-gray-500" />
```

## ✅ ALWAYS DO THIS
```tsx
// CORRECT - use tokens
<div className="bg-background text-foreground" />
<button className="bg-primary text-primary-foreground" />
<p className="text-muted-foreground" />
```
