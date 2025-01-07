import ProductInfo from '@/components/products/ProductInfo';
import React from 'react';

export default async function page({ params }: { params: { productId: string } }) {
  const { productId } = await params;

  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-5">
        <ProductInfo />
      </div>
    </div>
  );
}
