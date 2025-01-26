'use client';
import { useEffect } from 'react';
import useAuthStore from '@/middleware/authMiddleware';
import { useRouter } from 'next/navigation';
import { press_start_2p } from '@/constants/fonts';
import CreateServiceForm from './CreateServiceForm';

export default function NewServiceView() {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="container mx-auto py-16">
      <h1
        className={`mb-8 text-center text-3xl font-bold ${press_start_2p.className} text-red-600`}
      >
        Create New Service
      </h1>
      <CreateServiceForm />
    </div>
  );
}
