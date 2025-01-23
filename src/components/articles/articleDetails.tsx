'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { press_start_2p } from '@/constants/fonts';
import LikeButton from './LikeButton';
import { calculateReadTime } from '@/lib/utils';
import { Button } from '../ui/button';
import useAuthStore from '@/middleware/authMiddleware';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  image?: string;
  likes: number;
  likedBy: string[];
  authorId: string;
  author: {
    firstName: string;
    lastName: string;
  };
}

export default function ArticleDetails({
  article,
  onLikeSuccess,
}: {
  article: Article;
  onLikeSuccess?: () => void;
}) {
  const { user } = useAuthStore();
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${article.id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!res.ok) throw new Error('Failed to delete article');

      router.push('/articles');
      toast({
        title: 'Success',
        description: 'Article deleted successfully',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'Something went wrong',
      });
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className={`${press_start_2p.className} mb-6 text-3xl text-red-600`}>{article.title}</h1>

      <div className="mb-8 flex items-center gap-4 text-stone-400">
        <span>{new Date(article.createdAt).toLocaleDateString()}</span>
        <span>•</span>
        <span>{calculateReadTime(article.content)} min read</span>
        <span>•</span>
        <span>
          By {article.author.firstName} {article.author.lastName}
        </span>
      </div>

      {article.image && (
        <div className="relative mb-8 h-96">
          <Image
            src={article.image}
            fill
            className="rounded-lg object-cover"
            alt={article.title}
          />
        </div>
      )}

      <div className="prose prose-invert mb-8 w-full max-w-3xl">
        {article.content.split('\n').map((para, i) => (
          <p
            key={i}
            className="whitespace-pre-wrap break-words text-lg"
          >
            {para}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <LikeButton
          articleId={article.id}
          initialLikes={article.likes}
          likedBy={article.likedBy}
          onLikeSuccess={onLikeSuccess}
        />
        {user?.id?.toString() === article.authorId && (
          <div className="space-x-4">
            <Button
              variant="ourButton"
              onClick={() => router.push(`/articles/${article.id}/edit`)}
            >
              Edit
            </Button>

            
            <Button
              variant="destructive"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete
            </Button>
            {showDeleteModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
                <div className="flex h-full w-full items-center justify-center bg-cover bg-center">
                  <div className="flicker rounded-lg border-2 border-stone-700 bg-black bg-opacity-70 bg-signup-message-pattern p-8 text-center">
                    <h2 className={`${press_start_2p.className} mb-6 text-2xl text-red-600`}>
                      Confirm Destruction
                    </h2>
                    <p className="glitch mb-6 text-lg text-stone-300">
                      This action is irreversible. The article will be erased from existence.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button
                        onClick={() => setShowDeleteModal(false)}
                        className="h-12 w-32 rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="h-12 w-32 rounded-none border-2 font-bold"
                      >
                        {isDeleting ? 'Erasing...' : 'Confirm'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
