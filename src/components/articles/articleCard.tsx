import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { press_start_2p } from '@/constants/fonts';
import { calculateReadTime } from '@/lib/utils';
import { ArticleType } from '@/types/interfaces';

export default function ArticleCard({ article }: { article: ArticleType }) {
  const readTime = article.readTime || calculateReadTime(article.content);
  const date = new Date(article.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Card className="mx-auto mb-8 max-w-4xl rounded-none border-2 bg-transparent text-stone-100 transition-colors hover:border-red-600">
      <div className="flex flex-col gap-6 p-6 md:flex-row">
        {/* Text Content */}
        <div className="w-full md:max-w-[50%] md:flex-1">
          <CardHeader className="mb-4 p-0">
            <div className="mb-2 flex items-center gap-4 text-sm text-stone-400">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime} min read</span>
            </div>
            <h3 className={`${press_start_2p.className} mb-4 text-xl text-red-600 md:text-2xl`}>
              {article.title}
            </h3>
          </CardHeader>

          <CardContent className="p-0">
            <div className="line-clamp-3 text-sm text-stone-300 md:text-base">
              {article.content}
            </div>
          </CardContent>

          <div className="mt-4">
            <Link
              href={`/articles/${article.id}`}
              className="text-sm text-red-600 hover:underline"
            >
              Read more...
            </Link>
          </div>
        </div>

        {article.image && (
          <div className="relative mx-auto h-48 w-full md:h-48 md:w-2/5">
            <Image
              src={article.image}
              fill
              className="rounded-sm object-cover"
              alt={article.title}
              priority
            />
          </div>
        )}
      </div>
    </Card>
  );
}
