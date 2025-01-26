import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { UserType } from '@/types/interfaces';

export default function UserCredits({ userData }: { userData: UserType }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p>
          <span className="text-md font-bold text-red-600">Visa : </span>{' '}
          {userData?.visaCards[0]?.cardNumber || 'No Vise Found'}
        </p>
        {userData.visaCards.length === 0 && (
          <Link href="/add-visa">
            <Button
              variant="ourButton"
              className="h-12 w-[150px]"
            >
              Add Visa
            </Button>
          </Link>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between gap-10">
        <p>
          <span className="text-md font-bold text-red-600">Credits : </span> {userData.balance}
        </p>
        {userData.visaCards.length > 0 && (
          <Link href="/add-crypto-wallet">
            <Button
              variant="ourButton"
              className="h-12 w-[150px]"
            >
              Add Credits
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
