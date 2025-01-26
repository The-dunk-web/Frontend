'use client';
import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';

import { useUser } from '@/hooks/useUser';
import { Button } from '../ui/button';
import { ProductImageSlider } from '../products/ProductImagesSlider';
import { OrderType } from '@/types/interfaces';

export default function OrderDetails({ orderId }: { orderId: string }) {
  const [orderDetails, setOrderDetails] = useState<OrderType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userData } = useUser();

  async function fetchOrderDetails() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/my-orders/${orderId}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Error ${data.message}`);
      }
      setOrderDetails(data.order);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  async function handleOrder(query: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/${orderId}/${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: userData?.visaCards[0]?.cardNumber,
        }),
        credentials: 'include',
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`${data.message}`);
      }

      toast({
        className: 'bg-green-600 text-2xl tracking-wider border-green-600 text-slate-100',
        title: 'Sucess',
        description: `Your order ${query}ed successfully`,
      });

      await fetchOrderDetails();
    } catch (err: unknown) {
      toast({
        className: 'bg-red-600 text-2xl tracking-wider',
        variant: 'destructive',
        title: `${query} Order Error`,
        description: (err as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading && !orderDetails) {
    return (
      <div className="text-center">
        <div className="flex min-h-[200px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!orderDetails) {
    return <div className="text-center text-red-500">No order found.</div>;
  }

  const statusColor =
    orderDetails.status === 'pending'
      ? 'bg-orange-500/20 text-orange-600'
      : orderDetails.status === 'finished'
        ? 'bg-green-500/20 text-green-600'
        : 'bg-red-500/20 text-red-600';

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="max-w-[80%] px-8">
        <ProductImageSlider productImgs={orderDetails.product.photos} />
        <div className="flex flex-col gap-5 p-10">
          <p>
            <span className="font-semibold text-red-600">Product Name: </span>
            {orderDetails.product.name}
          </p>
          <p>
            <span className="font-semibold text-red-600">Product Description: </span>
            {orderDetails.product.description}
          </p>
          <p>
            <span className="font-semibold text-red-600">Product Price: </span>
            {orderDetails.product.price} credits
          </p>
        </div>
      </div>
      <div>
        <div className="mb-10 flex flex-col gap-5 md:mt-10">
          <p>
            <span className="font-semibold text-red-600">Order Quantity: </span>{' '}
            {orderDetails.quantity}
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Price: </span>{' '}
            {orderDetails.totalPrice} credits
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Status: </span>{' '}
            <span className={`rounded-md ${statusColor} p-1 px-2`}> {orderDetails.status}</span>
          </p>
          <p>
            <span className="font-semibold text-red-600">Created At: </span>{' '}
            {orderDetails.createdAt.split('T')[0]}
          </p>
          {orderDetails.status !== 'pending' && (
            <p>
              <span className="font-semibold text-red-600">
                {orderDetails.status === 'finished' && 'Finished At: '}
                {orderDetails.status === 'canceled' && 'Canceled At: '}
              </span>{' '}
              {orderDetails.updatedAt.split('T')[0]}
            </p>
          )}
        </div>
        {orderDetails.status === 'pending' && (
          <div className="checkout flex gap-5">
            <Button
              disabled={isLoading}
              onClick={() => handleOrder('finish')}
              variant="ourButton"
            >
              {isLoading ? 'Loading...' : 'Finish'}
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => handleOrder('cancel')}
              variant="ourButton"
            >
              {isLoading ? 'Loading...' : 'Cancel'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
