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

interface ArticleType {
  id?: string;
  title?: string;
  content?: string;
  image?: string;
}
interface ArticleFormProps {
  initialData?: ArticleType;
  onSuccess?: () => void; 
}

export default function CreateArticleForm({ initialData, onSuccess }: ArticleFormProps) {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const { user } = useAuthStore();
  const isEditMode = !!initialData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: initialData?.title || '',
      content: initialData?.content || '',
    },
  });

  useEffect(() => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Required',
        description: 'You need to login to manage articles',
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
      if (file) formData.append('image', file);

      const url = isEditMode
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${initialData?.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/articles/create`;

      const method = isEditMode ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        credentials: 'include',
        body: formData,
      });

      if (!res.ok)
        throw new Error(isEditMode ? 'Failed to update article' : 'Failed to create article');
      if (isEditMode) {
        onSuccess?.();
      } else {
        toast({
          title: 'Success',
          description: 'Article created successfully',
        });
        router.push('/articles');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'Something went wrong',
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
          defaultValue={initialData?.title}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <Input
          {...register('content')}
          placeholder="Article Content"
          className="h-32"
          defaultValue={initialData?.content}
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
        {isEditMode ? 'Update Article' : 'Publish Article'}
      </Button>
    </form>
  );
}
