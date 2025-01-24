'use client';
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
interface ServicesType {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  overallRating: number;
}

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

        console.log(res);
        console.log(data);

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
    return <div className="text-center">Loading Services...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (services.length === 0) {
    return <div className="text-center">No Services found.</div>;
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
