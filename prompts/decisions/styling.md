# Styling Decisions

## Framework
- Tailwind CSS with CSS variables for theming
- Dark mode via `.dark` class on root
- iconoir-react for all icons

## Color System (ALWAYS USE TOKENS)
```tsx
// ✅ Correct
<div className="bg-background text-foreground" />
<button className="bg-primary text-primary-foreground" />

// ❌ Wrong — NEVER hardcode colors
<div className="bg-gray-900 text-gray-100" />
<button className="bg-blue-600 text-white" />
```

## Theme Tokens
| Token | Light | Dark |
|-------|-------|------|
| background | #fafafa | #282C34 |
| foreground | #282C34 | #ABB2BF |
| card | #ffffff | #2e3238 |
| primary | #282C34 | #61AFEF |
| secondary | #d4d5d9 | #54565E |
| accent | #ededed | #1e1e2e |
| muted | #ededed | #3a3d42 |
| border | #d4d5d9 | #404449 |
| destructive | #dc2626 | #dc2626 |

## Typography
```tsx
<h1 className="text-heading">24px heading</h1>
<p className="text-body">16px body</p>
<span className="text-caption">12px caption</span>
```

## Spacing
```tsx
<div className="p-default gap-default space-y-default">12px</div>
```

## UI Components (use existing)
```tsx
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"  
import Card from "@/components/ui/Card"
```

## Icons
```tsx
import { Search, Plus, Check } from "iconoir-react"
<Button icon={<Search />}>Search</Button>
```
