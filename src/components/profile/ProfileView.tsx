'use client';
import Image from 'next/image';

import { useUser } from '@/hooks/useUser';

import UpdateProfileForm from './UpdateProfileForm';
import ChangePasswordForm from './ChangePasswordForm';
import { press_start_2p } from '@/constants/fonts';
import UserCredits from './UserCredits';
import ImageUpload from './ImageUpload';
import useAuthStore from '@/middleware/authMiddleware';
import ImgFallback from './assets/no-image.jpg';
import DeleteAccount from './DeleteAccount';

export default function ProfileView() {
  const { userData, loading, error } = useUser();
  const { user } = useAuthStore();
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!userData) {
    return <div className="text-center text-red-500">No user data found.</div>;
  }

  return (
    <div className="mx-auto max-w-[600px] space-y-10 divide-y-2">
      <div>
        <h1
          className={`${press_start_2p.className} mb-10 text-center text-xl tracking-wider text-red-600`}
        >
          User Profile
        </h1>
        <div className="mx-auto mb-10 h-[150px] w-[150px] overflow-hidden rounded-full">
          <Image
            src={user?.profile || ImgFallback}
            alt="Profile Image"
            width={900}
            height={900}
            className="h-full object-cover"
            priority
          />
        </div>
        <ImageUpload />
      </div>

      <div className="pt-10">
        <h2
          className={`${press_start_2p.className} text-md mb-5 text-center tracking-wider text-red-600`}
        >
          Updata Your Data
        </h2>
        <UpdateProfileForm userData={userData} />
      </div>

      <div className="pt-10">
        <h2
          className={`${press_start_2p.className} text-md mb-5 text-center tracking-wider text-red-600`}
        >
          Credits and Visa
        </h2>

        <UserCredits userData={userData} />
      </div>

      <div className="pt-10">
        <h2
          className={`${press_start_2p.className} text-md mb-5 text-center tracking-wider text-red-600`}
        >
          Change Your Password
        </h2>

        <ChangePasswordForm />
      </div>

      <div className="flex flex-col pt-10">
        <h2
          className={`${press_start_2p.className} text-md mb-5 text-center tracking-wider text-red-600`}
        >
          Delete Your account
        </h2>

        <div className="self-end">
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
}
