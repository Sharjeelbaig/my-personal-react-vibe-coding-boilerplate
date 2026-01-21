# Constraints

## Technical Constraints
- React 18+
- TypeScript strict mode
- Tailwind CSS only (no other styling solutions)
- Firebase for auth, PGLite + Hono for backend
- iconoir-react for icons (import from "iconoir-react")
- Vite as build tool

## Design Tokens (USE THESE — NO HARDCODING)
| Token | Usage |
|-------|-------|
| `bg-background` | Page background |
| `bg-card` | Card/surface background |
| `bg-primary` | Primary buttons |
| `bg-secondary` | Secondary elements |
| `bg-accent` | Hover/focus states |
| `bg-muted` | Subtle backgrounds |
| `bg-destructive` | Danger/error |
| `text-foreground` | Body text |
| `text-muted-foreground` | Subtle text |
| `text-primary-foreground` | Text on primary |
| `border-border` | Default borders |
| `border-input` | Input borders |
| `ring-ring` | Focus rings |

## Typography (USE THESE)
| Class | Size |
|-------|------|
| `text-heading` | 24px headings |
| `text-body` | 16px body |
| `text-caption` | 12px small text |

## Spacing
| Class | Size |
|-------|------|
| `p-default` / `gap-default` / `space-y-default` | 12px |

## FORBIDDEN (NEVER USE)
- `bg-blue-*`, `bg-gray-*`, `bg-red-*` — use tokens
- `text-gray-*`, `text-blue-*` — use tokens
- `border-gray-*` — use `border-border`
- Hardcoded hex colors
- Inline styles

## Performance Constraints
- Lazy load features when using routing
- Keep bundle size minimal
- Use React.memo sparingly

## File Size Constraints
- Components: < 200 lines ideal
- Hooks: < 100 lines ideal

## Naming Constraints
- Components: PascalCase
- Functions/hooks: camelCase
- Files: Match export name
- Boolean props: is/has prefix
