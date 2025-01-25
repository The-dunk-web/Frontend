import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  profile: string | null;
  phone: string;
  email: string;
  verified: boolean;
  balance: number;
  resetPasswordToken: string | null;
  resetPasswordExpires: string | null;
  visaCards: {
    cardNumber: string;
    cvv: string;
    expiryDate: string;
  }[];
}

export default function UserCredits({ userData }: { userData: User }) {
  console.log(userData);
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p>
          <span className="text-md font-bold text-red-600">Visa : </span>{' '}
          {userData?.visaCards[0]?.cardNumber || 'No Vise Found'}
        </p>
        {userData.visaCards.length === 0 && (
          <Link href="/add-crypto-wallet">
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
              Add More
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
