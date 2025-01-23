'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import useAuthStore from '@/middleware/authMiddleware';

interface LikeButtonProps {
  articleId: string;
  initialLikes?: number;
  likedBy?: Array<{ id: string }>;
}

export default function LikeButton({ articleId, initialLikes = 0, likedBy = [] }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    if (user?.id) {
      const userId = String(user.id);
      setIsLiked(likedBy.some((u) => String(u.id) === userId));
    }
  }, [user, likedBy]);

  const handleLike = async () => {
    if (!user?.id) {
      toast({
        variant: 'destructive',
        title: 'Login Required',
        description: 'You need to login to like articles',
      });
      return;
    }

    if (isLoading) return;

    setIsLoading(true);
    const previousLikes = likes;
    const previousIsLiked = isLiked;

    try {
      // Optimistic update
      setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
      setIsLiked(!isLiked);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${articleId}/like`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!res.ok) throw new Error('Failed to update like status');

      const data = await res.json();

      // Update from server response
      setLikes(data.article.likes);
      interface ArticleResponse {
        article: {
          likes: number;
          likedBy: Array<{ id: string }>;
        };
      }
      setIsLiked((data as ArticleResponse).article.likedBy.some((u) => u.id === String(user.id)));
    } catch (error) {
      // Rollback on error
      setLikes(previousLikes);
      setIsLiked(previousIsLiked);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'Something went wrong',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ourButton"
      onClick={handleLike}
      disabled={isLoading}
    >
      {likes} ❤️ {isLiked ? 'Liked' : 'Like'}
    </Button>
  );
}
