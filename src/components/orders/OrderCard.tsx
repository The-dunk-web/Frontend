import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Img from './assets/features-1.jpg';

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

export default function OrderCard({ order }: { order: OrderType }) {
  return (
    <div className="pt-2">
      <Link
        href={`/orders/${order.id}`}
        className="underline-offset-4 hover:underline"
      >
        <span className="font-semibold text-red-600">Order# </span> {order.id}
      </Link>
      <div className="mt-3 grid gap-3 md:grid-cols-3 lg:grid-cols-2">
        <div className="flex flex-col gap-5 md:col-span-2 md:flex-row md:items-center lg:col-span-1">
          <div className="image sm:w-2/3 md:w-1/2 lg:w-1/3">
            <Image
              src={order.product.photos.length > 0 ? order.product.photos[0] : Img}
              width={900}
              height={900}
              alt={order.product.name}
              className="w-full"
            />
          </div>
          <div className="orderDetails flex flex-col gap-3 md:w-1/2 lg:w-2/3">
            <div>
              <p className="font-semibold text-red-600">Product Name: </p>
              <p>{order.product.name}</p>
            </div>
            <div>
              <p className="font-semibold text-red-600">Product Description: </p>
              <p>{order.product.description}</p>
            </div>
            <div>
              <span className="font-semibold text-red-600">Product Quantity: </span>{' '}
              {order.quantity}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p>
            <span className="font-semibold text-red-600">Order Price: </span> {order.totalPrice}$
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Status: </span> {order.status}
          </p>
          <p>
            <span className="font-semibold text-red-600">Order Date: </span>{' '}
            {order.createdAt.split('T')[0]}
          </p>
        </div>
      </div>
    </div>
  );
}
