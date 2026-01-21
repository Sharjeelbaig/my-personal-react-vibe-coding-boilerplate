# File Structure

## Overview
```
src/
├── App.tsx                    # Main app entry
├── main.tsx                   # React DOM render
├── index.css                  # Global styles + theme
├── components/
│   ├── ui/                    # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   └── layouts/               # Page layouts
│       ├── DashboardLayout.tsx
│       ├── AuthLayout.tsx
│       └── NormalLayout.tsx
├── features/                  # Feature modules
│   ├── todos/
│   │   ├── index.tsx
│   │   ├── components/
│   │   └── hooks/
│   └── auth/
│       ├── login.tsx
│       └── register.tsx
└── lib/
    ├── supabase.ts            # Supabase client
    ├── api.ts                 # API wrapper (if needed)
    ├── types/                 # Shared types
    │   └── database.ts
    └── hooks/                 # Shared hooks
        └── useAuth.ts
```

## Where to Put Things

| Type | Location |
|------|----------|
| UI primitives (Button, Input) | `src/components/ui/` |
| Page layouts | `src/components/layouts/` |
| Feature code | `src/features/[name]/` |
| Shared hooks | `src/lib/hooks/` |
| Types | `src/lib/types/` |
| API clients | `src/lib/` |
| Global CSS | `src/index.css` |

## Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `TodoItem.tsx` |
| Hooks | camelCase with use | `useTodos.ts` |
| Types | PascalCase | `Todo`, `User` |
| Folders | kebab-case | `todo-list/` |

## Feature Folder
```
src/features/todos/
├── index.tsx              # Main export (TodosFeature)
├── components/
│   ├── TodoList.tsx       # Feature-specific components
│   └── TodoItem.tsx
└── hooks/
    └── useTodos.ts        # Feature-specific hooks
```

## ❌ NEVER
```
// WRONG - mixed concerns
src/components/
├── Button.tsx
├── TodoList.tsx        # Should be in features/
├── LoginForm.tsx       # Should be in features/
└── useTodos.ts         # Hooks don't go here
```

## ✅ ALWAYS
```
// CORRECT - separated concerns
src/
├── components/ui/Button.tsx      # Reusable UI
├── features/todos/TodoList.tsx   # Feature-specific
└── lib/hooks/useAuth.ts          # Shared hook
```
