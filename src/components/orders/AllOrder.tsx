'use client';
import { press_start_2p } from '@/constants/fonts';
import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';

interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  photos: string[];
}

interface OrderType {
  id: string;
  quantity: number;
  status: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
  productId: string;
  product: ProductType;
}

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
    return <div className="text-center">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (orders.length === 0) {
    return <div className="text-center">No orders found.</div>;
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
