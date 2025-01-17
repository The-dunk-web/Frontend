'use client';

import { useEffect } from 'react';
import useAuthStore from '@/middleware/authMiddleware';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return <>{children}</>;
}
