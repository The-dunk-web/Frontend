'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { articleSchema, ArticleFormData } from '@/types/schema/article-schema';
import useAuthStore from '@/middleware/authMiddleware';

export default function CreateArticleForm() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const { user } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
  });

  useEffect(() => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Required',
        description: 'You need to login to create articles',
      });
      router.push('/sign-in');
    }
  }, [user, router]);

  const onSubmit = async (data: ArticleFormData) => {
    if (!user) return;

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      formData.append('authorId', user.id.toString());
      if (file) formData.append('image', file);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to create article');

      toast({
        title: 'Success',
        description: 'Article created successfully',
      });
      router.push('/articles');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
    }
  };

  if (!user) return null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-2xl space-y-6"
    >
      <div>
        <Input
          {...register('title')}
          placeholder="Article Title"
          className="mb-4 h-16 text-xl font-bold"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <Input
          {...register('content')}
          placeholder="Article Content"
          className="h-32"
        />
        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
      </div>

      <div>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          accept="image/*"
        />
      </div>

      <Button
        type="submit"
        variant="ourButton"
      >
        Publish Article
      </Button>
    </form>
  );
}
