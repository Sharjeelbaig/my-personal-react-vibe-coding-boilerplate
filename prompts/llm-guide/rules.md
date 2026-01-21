# Rules for AI Code Generation

## Core Principles
1. **Minimal by default** - Only add what's needed
2. **Feature-based** - Group by feature, not technical layer
3. **Explicit over implicit** - Clear naming, no magic
4. **Supabase-first** - Use Supabase for data, auth, storage

## Code Generation Rules

### DO
- Create files in appropriate feature folders
- Use TypeScript for type safety
- Export components as default from feature index
- Use functional components with hooks
- Handle loading and error states
- Use Tailwind classes directly in JSX

### DON'T
- Install unnecessary packages
- Create files until they're needed
- Use class components
- Add global state until required
- Create barrel exports everywhere
- Add comments unless complex logic requires it

## When Adding Features
1. Create folder in `/src/features/[feature-name]`
2. Add components in feature's components folder
3. Create hooks for data/logic in feature's hooks folder
4. Export main component from feature's index.tsx
5. Import into App.tsx

## Example: Adding a "todos" feature
```bash
src/features/todos/
├── components/
│   ├── TodoList.tsx
│   └── TodoItem.tsx
├── hooks/
│   └── useTodos.ts
└── index.tsx
```
