import ProductInfo from '@/components/products/ProductInfo';
import React from 'react';

export default async function page({ params }: { params: { productId: string } }) {
  const { productId } = await params;

  return <ProductInfo productId={productId} />;
}
