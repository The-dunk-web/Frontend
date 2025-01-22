import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { press_start_2p } from '@/constants/fonts';

interface ArticleType {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  author: {
    firstName: string;
    lastName: string;
  };
  likes: number;
}

export default function ArticleDetails({ article }: { article: ArticleType }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className={`${press_start_2p.className} mb-6 text-3xl text-red-600`}>{article.title}</h1>

      {article.image && (
        <div className="relative mb-8 h-64">
          <Image
            src={article.image}
            fill
            className="rounded-lg object-cover"
            alt={article.title}
          />
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        <p className="text-lg">{article.content}</p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-sm">
            By {article.author.firstName} {article.author.lastName}
          </p>
          <p className="text-sm text-stone-400">
            Published on {new Date(article.createdAt).toLocaleDateString()}
          </p>
        </div>
        <Button variant="ourButton">{article.likes} ❤️</Button>
      </div>
    </div>
  );
}
