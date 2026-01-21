# File Structure Decisions

## Architecture
Feature-based organization with shared UI components

```
src/
├── components/
│   └── ui/              # Reusable UI components (Button, Input, Card)
├── features/
│   └── [feature-name]/  # Feature modules
│       ├── components/  # Feature-specific components
│       ├── hooks/       # Feature-specific hooks
│       └── index.tsx    # Feature entry point
├── lib/
│   ├── supabase.ts      # Supabase client
│   └── hooks/           # Shared custom hooks
└── App.tsx              # Root component
```

## Rules
- Each feature is self-contained
- Shared code goes in `/components/ui` or `/lib`
- Maximum 2-3 levels of nesting
- Feature folders only created when needed (not upfront)

## File Naming
- Components: PascalCase (Button.tsx, TodoList.tsx)
- Hooks: camelCase with 'use' prefix (useTodos.ts)
- Utils: camelCase (formatDate.ts)
- Types: PascalCase (User.ts, Todo.ts)
