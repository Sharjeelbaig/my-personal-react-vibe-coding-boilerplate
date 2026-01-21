# Firebase Authentication

## Setup
1. Create project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication → Sign-in methods
3. Add to `.env`:
```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=project-id
```

## Client
```tsx
import { auth } from "@/lib/firebase";
```

## Sign Up
```tsx
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

const { user } = await createUserWithEmailAndPassword(auth, email, password);
```

## Sign In
```tsx
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

const { user } = await signInWithEmailAndPassword(auth, email, password);
```

## Sign Out
```tsx
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

await signOut(auth);
```

## Get Current User
```tsx
import { auth } from "@/lib/firebase";

const user = auth.currentUser;
```

## Auth Hook
```tsx
// src/lib/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return { user, loading };
}
```

## Protected Route
```tsx
import { useAuth } from "@/lib/hooks/useAuth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) return <p className="text-muted-foreground">Loading...</p>;
  if (!user) return <Navigate to="/login" />;
  
  return children;
}
```

## Google Sign In
```tsx
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";

const provider = new GoogleAuthProvider();
const { user } = await signInWithPopup(auth, provider);
```
