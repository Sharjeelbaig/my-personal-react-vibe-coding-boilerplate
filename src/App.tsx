import { useState } from "react";
import { SunLight, HalfMoon, Check, Search } from "iconoir-react";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background p-default transition-colors">
        <div className="mx-auto max-w-4xl space-y-default">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-heading text-foreground">Vibe Template</h1>
              <p className="text-caption text-muted-foreground">LLM-friendly starter</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} icon={dark ? <SunLight /> : <HalfMoon />} />
          </header>

          {/* Buttons Demo */}
          <Card>
            <h2 className="mb-3 text-body font-medium text-foreground">Buttons</h2>
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button icon={<Check />}>With Icon</Button>
              <Button size="icon" icon={<Search />} />
            </div>
          </Card>

          {/* Inputs Demo */}
          <Card>
            <h2 className="mb-3 text-body font-medium text-foreground">Inputs</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input label="Email" placeholder="you@example.com" type="email" />
              <Input label="Search" placeholder="Search..." icon={<Search width={18} height={18} />} />
              <Input label="With Error" error="This field is required" />
              <Input placeholder="No label" disabled />
            </div>
          </Card>

          {/* Quick Start */}
          <Card>
            <h2 className="mb-3 text-body font-medium text-foreground">Quick Start</h2>
            <ul className="space-y-1 text-caption text-muted-foreground">
              <li>• /prompts — architecture decisions</li>
              <li>• /prompts/llm-guide — AI patterns</li>
              <li>• /src/components/ui — reusable UI</li>
              <li>• /src/features — feature modules</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
