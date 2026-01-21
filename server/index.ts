import { Hono } from "hono";
import { cors } from "hono/cors";
import { PGlite } from "@electric-sql/pglite";

const db = new PGlite("./data/pgdata");

// Run migrations on startup
await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  );
`);

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => c.json({ status: "ok" }));

// Example CRUD endpoints
app.get("/api/users", async (c) => {
  const { rows } = await db.query("SELECT * FROM users ORDER BY created_at DESC");
  return c.json(rows);
});

app.get("/api/users/:id", async (c) => {
  const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [c.req.param("id")]);
  return rows[0] ? c.json(rows[0]) : c.json({ error: "Not found" }, 404);
});

app.post("/api/users", async (c) => {
  const { id, email, name } = await c.req.json();
  await db.query("INSERT INTO users (id, email, name) VALUES ($1, $2, $3)", [id, email, name]);
  return c.json({ id, email, name }, 201);
});

app.delete("/api/users/:id", async (c) => {
  await db.query("DELETE FROM users WHERE id = $1", [c.req.param("id")]);
  return c.json({ ok: true });
});

export default app;