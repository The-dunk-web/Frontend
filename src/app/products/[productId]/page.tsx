import ProductInfo from '@/components/products/ProductInfo';
import React from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
export default async function page({ params }: { params: { productId: string } }) {
  const { productId } = await params;

  return <ProductInfo productId={productId} />;
}
