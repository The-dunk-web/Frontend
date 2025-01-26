'use client';
import React, { useEffect, useState } from 'react';

import OrderCard from './OrderCard';
import { press_start_2p } from '@/constants/fonts';
import { OrderType } from '@/types/interfaces';

export default function AllOrders() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getAllOrders() {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/my-orders`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(`Error ${data.message}`);
        }
        setOrders(data.orders);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllOrders();
  }, []);

  if (isLoading) {
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

  if (orders.length === 0) {
    return <div className="text-center text-red-500">No orders found.</div>;
  }

  return (
    <div>
      <h1 className={`${press_start_2p.className} mb-10 text-center text-red-500`}>My Orders</h1>
      <div className="space-y-5 divide-y-2">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
          />
        ))}
      </div>
    </div>
  );
}
