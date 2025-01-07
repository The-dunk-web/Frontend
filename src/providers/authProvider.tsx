// src/components/providers/AuthProvider.tsx
'use client';
import { useEffect } from 'react';
import useAuthStore from '@/middleware/authMiddleware';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { login, logout } = useAuthStore();

  useEffect(() => {
    // Hydrate the store when the component mounts
    const hydrateAuth = () => {
      if (typeof window !== 'undefined') {
        const storedAuth = localStorage.getItem('auth-storage');
        if (storedAuth) {
          try {
            const { state } = JSON.parse(storedAuth);
            if (state.user) {
              login(state.user);
            } else {
              logout();
            }
          } catch (error) {
            logout();
          }
        }
      }
    };

    hydrateAuth();
  }, [login, logout]);

  return <>{children}</>;
}
