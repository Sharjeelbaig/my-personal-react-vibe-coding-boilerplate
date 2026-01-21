import { ReactNode, useState } from "react";
import { Menu, Xmark } from "iconoir-react";

interface DashboardLayoutProps {
  children: ReactNode;
  sidebarContent?: ReactNode;
}

export function DashboardLayout({ children, sidebarContent }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 transform bg-card transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
        <div className="flex h-full flex-col border-r">
          <div className="flex h-14 items-center justify-between px-4 border-b">
            <span className="font-bold">Dashboard</span>
            <button onClick={() => setIsOpen(false)} className="lg:hidden">
              <Xmark width={20} height={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {sidebarContent}
          </div>
          <footer className="p-4 border-t text-caption text-muted-foreground">
            © 2026 Dashboard
          </footer>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:bg-accent p-1 rounded">
            <Menu width={20} height={20} />
          </button>
          <div className="flex-1 font-medium">Page Title</div>
        </header>
        <main className="flex-1 overflow-auto p-default">
          {children}
        </main>
      </div>
    </div>
  );
}
