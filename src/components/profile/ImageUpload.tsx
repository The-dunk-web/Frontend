'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/middleware/authMiddleware';

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [imgError, setImageError] = useState('');
  const { updateUser } = useAuthStore();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  async function onSubmit() {
    if (!file) {
      setImageError('Pleas Choose Image first');
      return;
    }
    const formData = new FormData();
    formData.append('profilePicture', file);

    try {
      setImageError('');
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/edit-profile`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      const data = await res.json();

      updateUser({
        profile: data.user.profile,
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      toast({
        className: 'border-green-500 bg-green-500 text-slate-100',
        title: 'Success',
        description: data.message,
      });
    } catch (err: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: (err as Error).message,
      });
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 grid items-center gap-3 md:grid-cols-2 md:gap-20">
        <input
          disabled={isSubmitting}
          id="articleImage"
          type="file"
          className="w-auto"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          accept="image/*"
        />
        <Button
          disabled={isSubmitting}
          variant="ourButton"
          className="self-end"
        >
          Upload Image
        </Button>
      </div>
      {imgError && <p className="text-red-500">{imgError}</p>}
    </form>
  );
}
