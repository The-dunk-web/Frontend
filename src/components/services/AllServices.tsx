import React from 'react';
import ServicesCard from './ServicesCard';

export default function AllServices() {
  return (
    <div className="container mx-auto mt-10 space-y-8 p-5">
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </div>
  );
}
