'use client';
import React from 'react';
import Link from 'next/link';
import useAuthStore from '@/middleware/authMiddleware';
import UserMenu from '@/components/landing/UserMenu';
import { Button } from '@/components/ui/button';

export default function User() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="rounded-none border-2 bg-transparent hover:bg-stone-100 hover:text-stone-950"
          >
            Login Now
          </Button>
        </Link>
      )}
    </>
  );
}
