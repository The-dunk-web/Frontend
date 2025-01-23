'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import useAuthStore from '@/middleware/authMiddleware';
interface LikeButtonProps {
  articleId: string;
  initialLikes: number;
  likedBy: string[];
  onLikeSuccess?: () => void;
}

export default function LikeButton({
  articleId,
  initialLikes,
  likedBy,
  onLikeSuccess,
}: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    const userId = String(user?.id || '');
    const stringLikedBy = likedBy.map((id) => String(id));
    setIsLiked(stringLikedBy.includes(userId));
    setLikes(initialLikes);
  }, [initialLikes, likedBy, user?.id]);

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
      const newLikeState = !isLiked;
      setLikes((prev) => (newLikeState ? prev + 1 : prev - 1));
      setIsLiked(newLikeState);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${articleId}/like`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to update like status');
      }

      if (onLikeSuccess) onLikeSuccess();
    } catch (error) {
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
