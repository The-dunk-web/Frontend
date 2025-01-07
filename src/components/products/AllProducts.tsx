import React from 'react';
import ProductCard from './ProductCard';

export default function AllProducts() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <ProductCard />
    </div>
  );
}
