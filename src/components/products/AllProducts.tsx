'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  photos: string[];
}

export default function AllProducts() {
  const [products, setProducts] = useState<ProductType[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getAllProducts() {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(`Error ${data.message}`);
        }

        setProducts(data.products);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllProducts();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading Products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center">No Products found.</div>;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
