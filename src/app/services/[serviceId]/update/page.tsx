import CreateServicesForm from '@/components/services/CreateServiceForm';
import React from 'react';

export default async function page({ params }: { params: { serviceId: string } }) {
  const { serviceId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${serviceId}`);
  const data = await res.json();

  return (
    <div className="container mx-auto p-10">
      <CreateServicesForm
        initialData={{
          id: data.service.id,
          name: data.service.name,
          description: data.service.description,
          price: data.service.price,
          photos: data.service.images[0] || '',
        }}
      />
    </div>
  );
}
