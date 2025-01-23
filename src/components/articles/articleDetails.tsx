'use client';
import React from 'react';
import Image from 'next/image';
import { press_start_2p } from '@/constants/fonts';
import LikeButton from './LikeButton';
import { calculateReadTime } from '@/lib/utils';
import { Button } from '../ui/button';
import useAuthStore from '@/middleware/authMiddleware';

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

export default function ArticleDetails({ article }: { article: Article }) {
  const { user } = useAuthStore();
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
          likedBy={article.likedBy.map((id) => ({ id }))}
        />
        {user?.id?.toString() === article.authorId && (
          <div className="space-x-4">
            <Button variant="ourButton">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        )}
      </div>
    </div>
  );
}
