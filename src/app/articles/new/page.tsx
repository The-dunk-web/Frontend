'use client';
import CreateArticleForm from '@/components/articles/ArticleForm';
import { useEffect } from 'react';
import useAuthStore from '@/middleware/authMiddleware';
import { useRouter } from 'next/navigation';
import { press_start_2p } from '@/constants/fonts';

export default function NewArticlePage() {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className={`mb-8 text-3xl font-bold ${press_start_2p.className} text-red-600`}>
        Write New Article
      </h1>
      <CreateArticleForm />
    </div>
  );
}
