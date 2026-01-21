# Hono + PGLite Server

## Install
```bash
cd server && bun install
```

## Run
```bash
bun run index.ts
```

## Database
- Uses PGLite (embedded Postgres)
- Data persisted to `./data/pgdata`
- Migrations run on startup

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| GET | `/api/users` | List users |
| GET | `/api/users/:id` | Get user |
| POST | `/api/users` | Create user |
| DELETE | `/api/users/:id` | Delete user |
