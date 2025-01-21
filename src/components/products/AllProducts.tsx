import React from 'react';
import ProductCard from './ProductCard';

export default function AllProducts() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard />
    </div>
  );
}
