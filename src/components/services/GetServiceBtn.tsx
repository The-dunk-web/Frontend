'use client';

import { toast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import useAuthStore from '@/middleware/authMiddleware';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ServicesType {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  overallRating: number;
  user: {
    firstName: string;
    lastName: string;
    profile: string;
  };
  userId: string;
}

export default function GetServiceBtn({ service }: { service: ServicesType }) {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isOwner = user?.id + '' === service?.userId;

  function handleGetService() {
    toast({
      variant: 'default',
      title: 'Thanks for Taking the Service',
      description: 'A Privite channel will be opend with the owner soon',
    });
  }

  async function hadnleDeleteService() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services/delete/${service.id}`,
        {
          method: 'DELETE',
          credentials: 'include',
        }
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Error ${data.message}`);
      }
      router.push('/services');
      toast({
        className: 'border-green-500 bg-green-500 text-slate-100',
        title: 'Success',
        description: data.message,
      });
    } catch (err: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: (err as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      {isOwner ? (
        <div className="flex flex-col gap-3">
          <Link
            className="w-full"
            href={`/services/${service.id}/update`}
          >
            <Button
              className="w-full"
              variant="ourButton"
            >
              Edit Service
            </Button>
          </Link>

          <Button
            disabled={isLoading}
            onClick={hadnleDeleteService}
            variant="ourButton"
            className="border-red-600 bg-red-600 hover:bg-red-700 hover:text-slate-100"
          >
            Delete Service
          </Button>
        </div>
      ) : (
        <Button
          className="w-full"
          variant="ourButton"
          onClick={handleGetService}
        >
          Get Service Now
        </Button>
      )}
    </div>
  );
}
