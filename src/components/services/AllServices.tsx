'use client';
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import { ServicesType } from '@/types/interfaces';

export default function AllServices() {
  const [services, setServices] = useState<ServicesType[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getAllProducts() {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(`Error ${data.message}`);
        }

        setServices(data.servicesWithRatings);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="flex min-h-[200px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (services.length === 0) {
    return <div className="text-center text-red-500">No Services found.</div>;
  }

  return (
    <div className="container mx-auto mt-10 space-y-8 p-5">
      {services.map((service) => (
        <ServicesCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}
