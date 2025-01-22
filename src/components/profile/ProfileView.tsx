'use client';

import { useUser } from '@/hooks/useUser';
import Image from 'next/image';
import ProfileImg from './assets/features-1.jpg';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ProfileView() {
  const { userData, loading, error } = useUser();
  console.log(userData);
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!userData) {
    return <div className="text-center">No user data found.</div>;
  }

  return (
    <div className="mx-auto flex max-w-[550px] flex-col gap-5">
      <h1>User Profile</h1>
      <div className="mx-auto mb-10 h-[150px] w-[150px] overflow-hidden rounded-full">
        <Image
          src={userData.profile || ProfileImg}
          alt="Profile Image"
          width={900}
          height={900}
          className="h-full object-cover"
        />
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="grid w-full items-center gap-1.5 tracking-wider">
            <Label
              htmlFor="firstName"
              className="text-red-600"
            >
              First Name
            </Label>
            <Input
              className="h-12 rounded-none border-2"
              type="text"
              id="firstName"
              placeholder="Your First Name"
              defaultValue={userData.firstName}
            />
          </div>

          <div className="grid w-full items-center gap-1.5 tracking-wider">
            <Label
              htmlFor="lastName"
              className="text-red-600"
            >
              Last Name
            </Label>
            <Input
              className="h-12 rounded-none border-2"
              type="text"
              id="lastName"
              placeholder="Your Last Name"
              defaultValue={userData.lastName}
            />
          </div>
        </div>

        <div className="grid items-center gap-1.5 tracking-wider">
          <Label
            htmlFor="email"
            className="text-red-600"
          >
            Email
          </Label>
          <Input
            className="h-12 rounded-none border-2 autofill:bg-transparent"
            type="email"
            id="email"
            placeholder="Your Email"
            defaultValue={userData.email}
          />
        </div>

        <div className="grid items-center gap-1.5 tracking-wider">
          <Label
            htmlFor="phone"
            className="text-red-600"
          >
            Phone
          </Label>
          <Input
            className="h-12 rounded-none border-2 autofill:bg-transparent"
            type="text"
            id="phone"
            placeholder="Your Phone Number"
            defaultValue={userData.phone}
          />
        </div>

        <Button
          variant="ourButton"
          className="h-12 self-end"
        >
          Update
        </Button>
      </form>

      <div className="mt-10 flex items-center justify-between gap-10">
        <p>
          <span className="text-red-600">Credits : </span> {userData.balance}
        </p>
        <Link href="/add-crypto-wallet">
          <Button variant="ourButton">Add More</Button>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <p>
          <span className="text-red-600">Visa : </span> 192731267878365
        </p>
        <Link href="/add-crypto-wallet">
          <Button variant="ourButton">Add Visa</Button>
        </Link>
      </div>

      <form className="mt-10 flex flex-col gap-5">
        <div className="grid items-center gap-1.5 tracking-wider">
          <Label
            htmlFor="oldPassword"
            className="text-red-600"
          >
            Old Password
          </Label>
          <Input
            className="h-12 rounded-none border-2 autofill:bg-transparent"
            type="password"
            id="oldPassword"
            placeholder="Old Password"
          />
        </div>
        <div className="grid items-center gap-1.5 tracking-wider">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="newPassword"
              className="text-red-600"
            >
              New Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-sm hover:text-red-600"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            className="h-12 rounded-none border-2 autofill:bg-transparent"
            type="password"
            id="newPassword"
            placeholder="New Password"
          />
        </div>

        <Button
          variant="ourButton"
          className="h-12 self-end"
        >
          Change Password
        </Button>
      </form>
    </div>
  );
}
