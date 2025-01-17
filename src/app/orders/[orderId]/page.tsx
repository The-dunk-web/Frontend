import OrderDetails from '@/components/orders/OrderDetails';
import { Button } from '@/components/ui/button';
import { press_start_2p } from '@/constants/fonts';
import React from 'react';

export default async function page({ params }: { params: { orderId: string } }) {
  const { orderId } = await params;
  return (
    <>
      <h1 className={`${press_start_2p.className} mb-10 text-center text-red-500`}>
        Order# {orderId} details
      </h1>
      <OrderDetails />
    </>
  );
}
