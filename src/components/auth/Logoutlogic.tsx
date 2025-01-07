import React from 'react';
import { logout } from '@/types/auth-schema';
import useAuthStore from '@/hooks/useAuthStore';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function LogoutButton() {
  const { logout: clearAuth } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    clearAuth();
    router.push('/sign-in');
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
