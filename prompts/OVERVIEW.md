# Template Overview

## What is This?

A minimal React + TypeScript template optimized for AI-assisted development. It uses a feature-based architecture with clear conventions that help both humans and AI assistants write consistent, maintainable code.

## Philosophy

1. **Minimal by Default** - Only add what you need when you need it
2. **Feature-Based** - Organize by feature, not technical layers
3. **AI-Friendly** - Clear patterns and extensive documentation for LLMs
4. **API-First** - Backend via Hono + PGLite, auth via Firebase
5. **Type-Safe** - TypeScript for catching errors early

## Directory Structure

```
project/
├── prompts/                 # Documentation for AI assistants
│   ├── decisions/          # Architecture decisions
│   │   ├── styling.md      # Tailwind CSS approach
│   │   ├── state.md        # React hooks + Context
│   │   ├── routing.md      # Add router when needed
│   │   ├── data-fetching.md # API + PGLite patterns
│   │   └── file-structure.md # Feature-based org
│   ├── llm-guide/          # Guides for AI coding
│   │   ├── rules.md        # Core principles
│   │   ├── patterns.md     # Code templates
│   │   ├── constraints.md  # Technical limits
│   │   ├── naming.md       # Naming conventions
│   │   └── examples.md     # Complete examples
│   ├── QUICKSTART.md       # Fast reference
│   └── OVERVIEW.md         # This file
│
├── src/
│   ├── components/
│   │   └── ui/            # Reusable components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── Card.tsx
│   ├── features/          # Feature modules (create as needed)
│   │   └── [feature-name]/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── index.tsx
│   ├── lib/
│   │   ├── firebase.ts   # Auth client
│   │   ├── api.ts        # API client
│   │   ├── hooks/        # Shared hooks
│   │   └── types/        # TypeScript types
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
│
└── [config files]
```

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Hono + PGLite (embedded Postgres)
- **Auth**: Firebase Authentication
- **State**: React Hooks + Context API

## When to Use This Template

Perfect for:
- MVPs and prototypes
- AI-assisted development
- Full-stack apps with custom backend
- Projects needing clear structure

Not ideal for:
- Projects requiring specific backend frameworks
- Teams with existing conventions
- Apps needing SSR/SSG (use Next.js instead)

## Getting Started

1. Read `QUICKSTART.md` for immediate usage
2. Review `decisions/` for architectural understanding
3. Check `llm-guide/examples.md` for code patterns
4. Start building features in `src/features/`

## Key Principles for AI Assistants

When generating code:
- Follow patterns in `/prompts/llm-guide/patterns.md`
- Respect constraints in `/prompts/llm-guide/constraints.md`
- Use naming from `/prompts/llm-guide/naming.md`
- Reference examples in `/prompts/llm-guide/examples.md`
- Always check decisions before adding new tech

## Extending the Template

Add new features by:
1. Creating feature folder in `src/features/[name]`
2. Adding components in feature's `components/` folder
3. Adding hooks in feature's `hooks/` folder
4. Exporting from feature's `index.tsx`
5. Importing into `App.tsx`

Add new UI components by:
1. Creating in `src/components/ui/ComponentName.tsx`
2. Following existing component patterns
3. Using TypeScript interfaces for props
4. Styling with Tailwind CSS

## Support

For questions about:
- Architecture decisions → See `/prompts/decisions/`
- Code patterns → See `/prompts/llm-guide/patterns.md`
- Naming conventions → See `/prompts/llm-guide/naming.md`
- Examples → See `/prompts/llm-guide/examples.md`
