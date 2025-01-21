'use client';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  photos: string[];
}

export default function PlaceOrder({ product }: { product: ProductType }) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function handleQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value;
    if (value < 1) return;
    setQuantity(value);
    console.log(quantity);
  }

  async function handlePlaceOrder() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/create/${product.id}`,
        {
          method: 'POST',
          body: JSON.stringify({ quantity: quantity }),
          credentials: 'include',
        }
      );
      console.log('res', res);
      const data = await res.json();
      console.log('data', data);

      if (!res.ok) {
        throw new Error(`Error Creating Your order ${data.message}`);
      }
    } catch (err: unknown) {
      console.log((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <p className="flex items-center gap-4">
        <span className="font-semibold text-red-600">Quantity: </span>{' '}
        <Input
          disabled={product.quantity === 0}
          type="number"
          className="w-auto rounded-none border-2"
          value={quantity}
          onChange={handleQuantity}
          min="1"
          max="900"
        />
      </p>
      <p>
        <span className="font-semibold text-red-600">Total Price: </span> {product.price * quantity}
        $
      </p>

      {product.quantity > 0 ? (
        // <Link href={`/products/${product.id}/order`}>
        <Button
          disabled={isLoading}
          onClick={handlePlaceOrder}
          variant="ourButton"
          className="w-full"
        >
          {isLoading ? 'Creating Your Order' : 'order now'}
        </Button>
      ) : (
        // </Link>
        <Button
          disabled
          variant="ourButton"
          className="w-full"
        >
          Out Of Stock
        </Button>
      )}
    </>
  );
}
