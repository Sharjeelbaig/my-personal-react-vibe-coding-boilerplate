# Forms

## Basic Form
```tsx
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // submit logic
    setLoading(false);
  }

  return (
    <Card>
      <h2 className="text-heading mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-default">
        <Input label="Name" value={name} onChange={setName} required />
        <Input label="Email" type="email" value={email} onChange={setEmail} required />
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </Card>
  );
}
```

## With Validation
```tsx
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
}

export default function ValidatedForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Invalid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // submit
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-default">
      <Input label="Name" value={name} onChange={setName} error={errors.name} />
      <Input label="Email" type="email" value={email} onChange={setEmail} error={errors.email} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## Login Form with Supabase
```tsx
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    
    setLoading(false);
  }

  return (
    <AuthLayout>
      <h1 className="text-heading mb-6">Sign In</h1>
      {error && <p className="text-destructive mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-default">
        <Input label="Email" type="email" value={email} onChange={setEmail} />
        <Input label="Password" type="password" value={password} onChange={setPassword} />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </AuthLayout>
  );
}
```

## Form Patterns

### Controlled Inputs
```tsx
const [value, setValue] = useState("");
<Input value={value} onChange={setValue} />
```

### Disabled State
```tsx
<Input disabled={loading} />
<Button disabled={loading || !isValid}>Submit</Button>
```

### Submit Button Loading
```tsx
<Button disabled={loading}>
  {loading ? "Loading..." : "Submit"}
</Button>
```
