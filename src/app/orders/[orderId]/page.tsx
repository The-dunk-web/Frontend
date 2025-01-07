import React from 'react';

export default async function page({ params }: { params: { orderId: string } }) {
  const { orderId } = await params;
  return <div>page</div>;
}
