'use client';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  function handleQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value;
    if (value < 1) return;
    setQuantity(value);
  }

  async function handlePlaceOrder() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/create/${product.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity }),
          credentials: 'include',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          `${data.message} ${data.message === 'Unauthorized' ? 'Please Login in first' : ''}`
        );
      }
      console.log(data);
      toast({
        className: 'bg-green-600 text-2xl tracking-wider border-green-600 text-slate-100',
        title: 'Sucess',
        description: 'Your order created succufully',
      });

      setTimeout(() => router.push(`/orders/${data.order.id}`), 1000);
    } catch (err: unknown) {
      toast({
        className: 'bg-red-600 text-2xl tracking-wider',
        variant: 'destructive',
        title: 'Create Order Error',
        description: (err as Error).message,
      });
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
