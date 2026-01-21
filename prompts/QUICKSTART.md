# Quick Start for AI Coding

## First Time Setup

When starting a new project with this template:

1. Review `/prompts/decisions/` for architectural choices
2. Read `/prompts/llm-guide/rules.md` for core principles
3. Check `/prompts/llm-guide/examples.md` for code patterns

## Adding a New Feature

```bash
# Example: Adding a "todos" feature
src/features/todos/
├── components/
│   ├── TodoList.tsx      # Main list component
│   └── TodoItem.tsx      # Individual item
├── hooks/
│   └── useTodos.ts       # Data fetching & mutations
└── index.tsx             # Feature entry point
```

Then import in App.tsx:
```tsx
import TodosFeature from './features/todos';
```

## Common Tasks

### Create a UI Component
Location: `src/components/ui/ComponentName.tsx`
Pattern: Props interface + functional component + Tailwind styling

### Create a Custom Hook
Location: `src/lib/hooks/useHookName.ts` (shared) or `src/features/[feature]/hooks/` (feature-specific)
Pattern: State management + effects + return object

### Query Database
```tsx
const { data, error } = await supabase
  .from('table_name')
  .select('*')
  .order('created_at', { ascending: false });
```

### Create Database Table
Requires migration via Supabase (see data-fetching.md)

## Key Files

- `src/lib/supabase.ts` - Database client
- `src/components/ui/` - Reusable components (Button, Input, Card)
- `src/features/` - Feature modules (created as needed)
- `prompts/` - Documentation for you and AI assistants

## Remember

- Keep it minimal
- Feature-based organization
- Supabase for all backend needs
- No unnecessary packages
- TypeScript for type safety
