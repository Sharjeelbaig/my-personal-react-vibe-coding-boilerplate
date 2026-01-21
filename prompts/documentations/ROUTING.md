# Routing

## No Router by Default
This template starts without routing. Add React Router only when needed.

## Install Router
```bash
bun add react-router-dom
```

## Setup in App.tsx
```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./features/home";
import DashboardPage from "./features/dashboard";
import LoginPage from "./features/auth/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## With Layouts
```tsx
import { DashboardLayout } from "@/components/layouts/DashboardLayout";

<Routes>
  {/* Public routes */}
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<LoginPage />} />
  
  {/* Dashboard routes with layout */}
  <Route element={<DashboardLayout />}>
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/settings" element={<SettingsPage />} />
  </Route>
</Routes>
```

## Navigation
```tsx
import { Link, useNavigate } from "react-router-dom";

// Link component
<Link to="/dashboard" className="text-primary hover:underline">Dashboard</Link>

// Programmatic navigation
const navigate = useNavigate();
<Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
```

## Lazy Loading (for large apps)
```tsx
import { lazy, Suspense } from "react";

const DashboardPage = lazy(() => import("./features/dashboard"));

<Route 
  path="/dashboard" 
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardPage />
    </Suspense>
  } 
/>
```

## File Structure with Routes
```
src/features/
├── home/
│   └── index.tsx        → /
├── auth/
│   ├── login.tsx        → /login
│   └── register.tsx     → /register
└── dashboard/
    ├── index.tsx        → /dashboard
    └── settings.tsx     → /dashboard/settings
```
