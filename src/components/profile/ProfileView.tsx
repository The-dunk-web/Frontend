'use client';

import { useEffect, useState } from 'react';

interface User {
  balance: number;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  verified: boolean;
}
export default function ProfileView() {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    async function fetchProfileData() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/profile`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();

      setUserData(data.user);
    }

    fetchProfileData();
  }, []);

  return <div>Welcome, {userData?.firstName}</div>;
}
