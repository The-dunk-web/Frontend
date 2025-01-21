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

  useEffect(() => {
    async function getAllProducts() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
    }

    getAllProducts();
  }, []);
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.length > 0
        ? products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        : 'Loading'}
    </div>
  );
}
