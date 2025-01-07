import React from 'react';

export default async function page({ params }: { params: { productId: string } }) {
  const { productId } = await params;

  return <div className="min-h-screen">product whose id === {productId}</div>;
}
