# Path Aliases in this Project

This project uses TypeScript path aliases to simplify imports and make the codebase more maintainable. Instead of using relative paths like `../../components/SomeComponent`, you can use aliases like `@components/SomeComponent`.

## Available Path Aliases

The following path aliases are configured in this project:

| Alias | Path | Description |
|-------|------|-------------|
| `@/*` | `src/*` | Root source directory |
| `@components/*` | `src/components/*` | React components |
| `@context/*` | `src/context/*` | React context providers and hooks |
| `@types/*` | `src/types/*` | TypeScript type definitions |
| `@utils/*` | `src/utils/*` | Utility functions |
| `@assets/*` | `src/assets/*` | Static assets like images |
| `@data/*` | `src/data/*` | Data files |
| `@styles/*` | `src/styles/*` | CSS and style files |

## Usage Examples

Before:
```typescript
import { useData } from "../../context/useData";
import aboutImage from "../../assets/about.jpg";
```

After:
```typescript
import { useData } from "@context/useData";
import aboutImage from "@assets/about.jpg";
```

## Configuration

These aliases are configured in two places:

1. `tsconfig.app.json` - For TypeScript compilation and editor support
2. `vite.config.ts` - For Vite bundling

If you need to add new aliases, make sure to update both files.