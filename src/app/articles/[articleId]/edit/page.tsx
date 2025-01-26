'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import ArticleForm from '@/components/articles/ArticleForm';
import { Button } from '@/components/ui/button';
import useAuthStore from '@/middleware/authMiddleware';

import { press_start_2p } from '@/constants/fonts';
import { ArticleType } from '@/types/interfaces';

export default function SpecificArticlePage() {
  const router = useRouter();
  const params = useParams();
  const { user } = useAuthStore();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.articleId}`
        );
        const data = await res.json();

        if (data.article.authorId !== user?.id) {
          router.push('/articles');
          return;
        }

        setArticle(data.article);
      } catch (error) {
        console.error(error);
        router.push('/articles');
      }
    };

    if (user) fetchArticle();
  }, [user, params.articleId, router]);

  const handleSuccess = () => {
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push(`/articles/${params.articleId}`);
  };

  if (!article)
    return (
      <div>
        <div className="flex min-h-[200px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className={`mb-8 text-3xl font-bold ${press_start_2p.className} text-red-600`}>
        Edit Article
      </h1>
      <ArticleForm
        initialData={article}
        onSuccess={handleSuccess}
      />

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="flex h-full w-full items-center justify-center bg-cover bg-center">
            <div className="flicker rounded-lg border-2 border-stone-700 bg-black bg-opacity-70 bg-signup-message-pattern p-8 text-center">
              <p className="glitch mb-6 text-lg text-stone-300">
                Article has been consumed by the void. The shadows whisper your edits.
              </p>
              <Button
                onClick={handleCloseModal}
                className="h-12 w-32 rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
              >
                View Article
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
