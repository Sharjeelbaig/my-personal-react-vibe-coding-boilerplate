# Vibe Coding React Template

A minimal, AI-friendly React template with feature-based architecture, designed for rapid development with AI assistance.

## Structure

```
src/
├── components/ui/    # Reusable UI components
├── features/         # Feature modules (created as needed)
├── lib/             # Utilities and shared logic
│   ├── firebase.ts  # Auth client
│   ├── api.ts       # API wrapper
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
- Hono + PGLite for backend
- Firebase for authentication

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env`:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
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
- API-first backend (Hono + PGLite)
- Type-safe with TypeScript
- No unnecessary abstractions
