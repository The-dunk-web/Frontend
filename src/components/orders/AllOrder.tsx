import { press_start_2p } from '@/constants/fonts';
import Link from 'next/link';
import React from 'react';
import OrderCard from './OrderCard';

export default function AllOrders() {
  return (
    <div>
      <h1 className={`${press_start_2p.className} mb-10 text-center text-red-500`}>My Orders</h1>
      <div className="space-y-5 divide-y-2">
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}
