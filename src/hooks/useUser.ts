import { useEffect, useState } from 'react';

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
}

export function useUser() {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUserData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/profile`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch user data: ${res.statusText}`);
        }

        const data = await res.json();

        if (isMounted) {
          setUserData(data.user);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (isMounted) {
          setError((err as Error).message);
          setLoading(false);
        }
      }
    }

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { userData, loading, error };
}
