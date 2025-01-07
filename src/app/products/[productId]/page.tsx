import ProductInfo from '@/components/products/ProductInfo';
import React from 'react';

export default async function page({ params }: { params: { productId: string } }) {
  const { productId } = await params;

  return (
    <div className="container mx-auto px-5">
      <ProductInfo productId={productId} />
    </div>
  );
}
