import { useEffect, useState } from 'react';
import { UserType } from '@/types/interfaces';

export function useUser() {
  const [userData, setUserData] = useState<UserType | null>(null);
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
