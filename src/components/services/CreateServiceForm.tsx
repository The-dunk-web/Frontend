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
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { ServicesFormType, servicesSchema } from '@/types/schema/services-form-shema';

interface ServiceType {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  photos?: string[];
}
interface ServiceFormProps {
  initialData?: ServiceType;
  onSuccess?: () => void;
}

export default function CreateServicesForm({ initialData, onSuccess }: ServiceFormProps) {
  const router = useRouter();
  const [file, setFile] = useState<File[] | null>(null);
  const [imgError, setImageError] = useState('');
  const { user } = useAuthStore();
  const isEditMode = !!initialData;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ServicesFormType>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
      price: initialData?.price || 0,
      photos: initialData?.photos || [],
    },
  });

  useEffect(() => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Required',
        description: 'You need to login to manage services',
      });
      router.push('/sign-in');
    }
  }, [user, router]);

  const onSubmit = async (data: ServicesFormType) => {
    if (!user) return;
    if (!file && !isEditMode) {
      setImageError('Service Image is Required');
      return;
    }

    try {
      setImageError('');
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('price', data.price + '');
      // formData.append('photos', file);
      file?.forEach((file) => {
        formData.append('photos', file);
      });

      const url = isEditMode
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/services/update/${initialData?.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/services/create`;

      const method = isEditMode ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        credentials: 'include',
        body: formData,
      });

      if (!res.ok)
        throw new Error(isEditMode ? 'Failed to update service' : 'Failed to create service');
      if (isEditMode) {
        toast({
          title: 'Success',
          description: 'Service Updated successfully',
        });
        router.push(`/services/${initialData?.id}`);
      } else {
        toast({
          title: 'Success',
          description: 'Service created successfully',
        });
        router.push('/services');
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
      className="mx-auto max-w-2xl"
    >
      <div className="mb-5 grid gap-1.5 tracking-wider">
        <Label htmlFor="serviceName">Service name</Label>
        <Input
          id="serviceName"
          className="h-14 rounded-none border-2 text-xl font-bold autofill:bg-transparent"
          {...register('name')}
          placeholder="Service name"
          defaultValue={initialData?.name}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-5 grid gap-1.5 tracking-wider">
        <Label htmlFor="serviceDescription">Service description</Label>
        <Input
          id="serviceDescription"
          className="h-14 rounded-none border-2 text-xl font-bold autofill:bg-transparent"
          {...register('description')}
          placeholder="Service description"
          defaultValue={initialData?.description}
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div className="mb-5 grid gap-1.5 tracking-wider">
        <Label htmlFor="ServicePrice">Service Price</Label>
        <Input
          id="ServicePrice"
          className="h-14 rounded-none border-2 text-xl font-bold autofill:bg-transparent"
          {...register('price')}
          placeholder="Service Price"
          defaultValue={initialData?.price}
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <div className="mb-5 grid gap-1.5 tracking-wider">
        <Label htmlFor="serviceImage">Service Image</Label>

        <input
          id="serviceImage"
          disabled={isSubmitting}
          className="mb-5"
          type="file"
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              const fileArray = Array.from(files);
              setFile(fileArray);
            }
            // setFile(e.target.files?.[0] || null);
            // setFile(arr || null);
          }}
          accept="image/*"
          multiple
        />
        {imgError && <p className="text-red-500">{imgError}</p>}
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        variant="ourButton"
      >
        {isEditMode ? 'Update Service' : 'Create Service'}
      </Button>
    </form>
  );
}
