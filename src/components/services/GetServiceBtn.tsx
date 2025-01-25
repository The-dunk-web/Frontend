'use client';

import { toast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import useAuthStore from '@/middleware/authMiddleware';
import Link from 'next/link';

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
  console.log(service);
  console.log(user);
  const isOwner = user?.id + '' === service.userId;

  function handleGetService() {
    toast({
      variant: 'default',
      title: 'Thanks for Taking the Service',
      description: 'A Privite channel will be opend with the owner soon',
    });
  }

  return (
    <div>
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
            variant="ourButton"
            className="border-red-600 bg-red-600 hover:bg-red-700 hover:text-slate-100"
          >
            Delete Service
          </Button>
        </div>
      ) : (
        <Button
          variant="ourButton"
          onClick={handleGetService}
        >
          Get Service Now
        </Button>
      )}
    </div>
  );
}
