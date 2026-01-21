# Icons (iconoir-react)

## Import
```tsx
import { Search, Plus, Check, Xmark, Menu } from "iconoir-react";
```

## Usage
```tsx
// Inline
<Search />

// With size
<Search width={20} height={20} />

// In Button
import Button from "@/components/ui/Button";
<Button icon={<Search />}>Search</Button>
<Button size="icon" icon={<Plus />} />
```

## Common Icons
| Icon | Import |
|------|--------|
| Search | `Search` |
| Add/Create | `Plus` |
| Close | `Xmark` |
| Menu | `Menu` |
| Check | `Check` |
| Edit | `EditPencil` |
| Delete | `Trash` |
| Settings | `Settings` |
| User | `User` |
| Home | `Home` |
| Arrow Left | `ArrowLeft` |
| Arrow Right | `ArrowRight` |
| Sun (light mode) | `SunLight` |
| Moon (dark mode) | `HalfMoon` |
| Eye | `Eye` |
| Eye closed | `EyeClosed` |
| Download | `Download` |
| Upload | `Upload` |
| Link | `Link` |
| Mail | `Mail` |
| Lock | `Lock` |
| Calendar | `Calendar` |
| Filter | `Filter` |
| Sort | `Sort` |

## ❌ NEVER
```tsx
// WRONG - don't use other libraries
import { Search } from "lucide-react";
import { FaSearch } from "react-icons/fa";

// WRONG - don't use inline SVG
<svg>...</svg>
```

## ✅ ALWAYS
```tsx
import { Search } from "iconoir-react";
```
