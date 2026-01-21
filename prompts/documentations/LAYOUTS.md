# Layouts

## Available Layouts
```tsx
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { NormalLayout } from "@/components/layouts/NormalLayout";
```

## DashboardLayout
```tsx
import { DashboardLayout } from "@/components/layouts/DashboardLayout";

function DashboardPage() {
  const sidebar = (
    <nav className="space-y-2">
      <a href="#" className="block p-2 rounded hover:bg-accent">Home</a>
      <a href="#" className="block p-2 rounded hover:bg-accent">Settings</a>
    </nav>
  );

  return (
    <DashboardLayout sidebarContent={sidebar}>
      <h1 className="text-heading">Dashboard</h1>
      <p className="text-muted-foreground">Content here</p>
    </DashboardLayout>
  );
}
```

## AuthLayout
```tsx
import { AuthLayout } from "@/components/layouts/AuthLayout";

function LoginPage() {
  return (
    <AuthLayout image={<img src="/auth-bg.jpg" className="h-full w-full object-cover" />}>
      <h1 className="text-heading mb-6">Sign In</h1>
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Button className="w-full mt-4">Sign In</Button>
    </AuthLayout>
  );
}
```

## Creating New Layout
```tsx
// src/components/layouts/SettingsLayout.tsx
import type { ReactNode } from "react";

interface SettingsLayoutProps {
  children: ReactNode;
  title: string;
}

export function SettingsLayout({ children, title }: SettingsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card p-default">
        <h1 className="text-heading">{title}</h1>
      </header>
      <main className="p-default">{children}</main>
    </div>
  );
}
```

## ❌ NEVER
```tsx
// WRONG - hardcoded colors
<div className="bg-gray-900 min-h-screen">

// WRONG - inline complex layout
function Page() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800">...</aside>
      <main>...</main>
    </div>
  );
}
```

## ✅ ALWAYS
```tsx
// CORRECT - use tokens
<div className="bg-background min-h-screen">

// CORRECT - use layout component
<DashboardLayout>{content}</DashboardLayout>
```
