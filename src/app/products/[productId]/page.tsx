'use client';
import ProductInfo from '@/components/products/ProductInfo';
import React from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
export default async function page({ params }: { params: { productId: string } }) {
  const { productId } = await params;
  // const token = localStorage.getItem('auth-token');

  try {
    const res = await fetch(`${API_URL}/api/orders/create/${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        quantity: 2,
      }),
      credentials: 'include',
    });
    const data = await res.json();
    console.log(res);
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  return <ProductInfo productId={productId} />;
}
