import ServiceDetails from '@/components/services/ServiceDetails';
import React from 'react';

export default async function page({ params }: { params: { serviceId: string } }) {
  const { serviceId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${serviceId}`);
  const data = await res.json();

  return (
    <div className="container mx-auto p-10">
      <ServiceDetails service={data.service} />
    </div>
  );
}
