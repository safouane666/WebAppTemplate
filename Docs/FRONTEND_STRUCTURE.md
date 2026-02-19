# Frontend Folder Structure

This document outlines the folder structure for the Joya Energy frontend application.

## Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   └── register/
│   │       └── page.tsx          # Register page
│   ├── layout.tsx                # Root layout with AuthProvider
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles with shadcn variables
│   └── about/                    # Example page
│       └── page.tsx
│
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   └── auth/                     # Authentication components
│       ├── login-form.tsx        # Login form component
│       ├── register-form.tsx     # Register form component
│       └── protected-route.tsx  # Protected route wrapper
│
├── contexts/                     # React contexts
│   └── auth-context.tsx         # Authentication context
│
├── hooks/                        # Custom React hooks
│   └── (future hooks)
│
├── lib/                          # Utility libraries
│   ├── api.ts                    # Axios client configuration
│   ├── utils.ts                  # Utility functions (cn helper)
│   └── auth/                     # Authentication utilities
│       └── api.ts                # Auth API functions
│
└── types/                        # TypeScript type definitions
    ├── index.ts                  # General types
    └── auth.ts                   # Auth-related types
```

## Key Features

### Authentication

- **Pages**: `/auth/login` and `/auth/register`
- **Context**: `AuthContext` provides global auth state
- **API**: Centralized auth API functions in `lib/auth/api.ts`
- **Protected Routes**: Use `ProtectedRoute` component to protect pages

### UI Components

- Built with **shadcn/ui** components
- Fully typed with TypeScript
- Form validation with **react-hook-form** and **zod**
- Responsive design with **Tailwind CSS**

### Routing

- Uses Next.js 14 **App Router**
- File-based routing
- Server and client components support

## Usage Examples

### Using Auth Context

```tsx
'use client';
import { useAuth } from '@/contexts/auth-context';

export function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return <div>Please login</div>;

  return <div>Welcome, {user?.full_name}</div>;
}
```

### Protecting a Route

```tsx
import { ProtectedRoute } from '@/components/auth/protected-route';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>Protected content</div>
    </ProtectedRoute>
  );
}
```

### Making Authenticated API Calls

```tsx
import { apiClient } from '@/lib/api';

// Token is automatically added via interceptor
const response = await apiClient.get('/some-protected-endpoint');
```

## Next Steps

1. Add more pages (dashboard, profile, etc.)
2. Create additional UI components as needed
3. Add custom hooks for data fetching
4. Implement refresh token rotation
5. Add error boundaries
6. Add loading states and skeletons
