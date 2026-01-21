import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  image?: ReactNode;
}

export function AuthLayout({ children, image }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-background">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {children}
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block bg-accent/20">
        {image}
      </div>
    </div>
  );
}
