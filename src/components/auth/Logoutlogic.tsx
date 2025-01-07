'use client';
import React from 'react';
import { logout } from '@/utils/api';
import useAuthStore from '@/middleware/authMiddleware';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function LogoutButton() {
  const clearAuth = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      clearAuth();
      router.push('/sign-in');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className="w-full rounded-none border-2 bg-transparent text-stone-100 hover:border-red-600 hover:bg-red-600 hover:text-stone-100"
    >
      Logout
    </Button>
  );
}
