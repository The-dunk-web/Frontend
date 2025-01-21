import ProductInfo from '@/components/products/ProductInfo';
import React from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
export default async function page({ params }: { params: { productId: string } }) {
  const { productId } = await params;
  console.log(productId);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`);
  const data = await res.json();
  console.log(data);

  return <ProductInfo product={data.product} />;
}
