# Routing Decisions

## Initial Setup
- **No router by default** - add React Router when multi-page navigation is needed
- Keep single-page apps simple without routing overhead

## When Router is Added
- Use React Router v6+
- File-based mental model: `/features/[feature]/pages/`
- Nested routes for layouts
- Lazy load route components for code splitting

## Example (when router is added)
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/dashboard" element={<DashboardPage />} />
</Routes>
```
