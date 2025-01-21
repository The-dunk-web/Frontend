'use client';

import { useUser } from '@/hooks/useUser';

export default function ProfileView() {
  const { userData, loading, error } = useUser();

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
    <div className="mx-auto w-[500px]">
      <h1>User Profile</h1>
      <p>
        Name: {userData.firstName} {userData.lastName}
      </p>
      <p>Email: {userData.email}</p>
      <p>Balance: {userData.balance}</p>
      {userData.profile && (
        <img
          className="w-full"
          src={userData.profile}
          alt="Profile"
        />
      )}
    </div>
  );
}
