# Vibe Coding React Template

A minimal, AI-friendly React template with feature-based architecture, designed for rapid development with AI assistance.

## Structure

```
src/
├── components/ui/    # Reusable UI components
├── features/         # Feature modules (created as needed)
├── lib/             # Utilities and shared logic
│   ├── supabase.ts  # Database client
│   └── hooks/       # Shared custom hooks
└── App.tsx          # Root component

prompts/
├── decisions/       # Architecture decisions
│   ├── styling.md
│   ├── state.md
│   ├── routing.md
│   ├── data-fetching.md
│   └── file-structure.md
└── llm-guide/      # AI assistant guidance
    ├── rules.md
    ├── patterns.md
    ├── constraints.md
    ├── naming.md
    └── examples.md
```

## Tech Stack

- React 18 + TypeScript
- Vite for building
- Tailwind CSS for styling
- Supabase for backend (database, auth, storage)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Start development server:
```bash
npm run dev
```

## Adding Features

1. Create feature folder in `src/features/[feature-name]`
2. Add components in `components/` subfolder
3. Add hooks for logic/data in `hooks/` subfolder
4. Export main component from `index.tsx`
5. Import into `App.tsx`

Example:
```
src/features/todos/
├── components/
│   └── TodoList.tsx
├── hooks/
│   └── useTodos.ts
└── index.tsx
```

## AI Prompting

This template includes comprehensive guides in `/prompts` to help AI assistants understand the architecture and generate consistent code. Reference these documents when prompting.

## Principles

- Minimal by default
- Feature-based organization
- Supabase-first for backend
- Type-safe with TypeScript
- No unnecessary abstractions
