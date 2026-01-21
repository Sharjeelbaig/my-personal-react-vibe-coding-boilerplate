import { ReactNode } from "react";

interface NormalLayoutProps {
  children: ReactNode;
}

export function NormalLayout({ children }: NormalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center px-4">
          <span className="font-bold">Logo</span>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-default px-4">
        {children}
      </main>
      <footer className="sticky bottom-0 z-50 border-t bg-background/95 backdrop-blur py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Built with Replit Agent
        </div>
      </footer>
    </div>
  );
}
