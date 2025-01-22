import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { press_start_2p } from '@/constants/fonts';
import { Button } from '../ui/button';
import Link from 'next/link';

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

export default function ArticleCard({ article }: { article: ArticleType }) {
  const excerpt = article.content.substring(0, 100) + '...';

  return (
    <Card className="flex flex-col justify-between rounded-none border-2 bg-transparent text-stone-100">
      {article.image && (
        <div className="relative h-48">
          <Image
            src={article.image}
            fill
            className="object-cover"
            alt={article.title}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className={`${press_start_2p.className} text-red-600`}>
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm">
          <p>
            By {article.author.firstName} {article.author.lastName}
          </p>
          <p>{new Date(article.createdAt).toLocaleDateString()}</p>
        </div>
        <Link href={`/articles/${article.id}`}>
          <Button variant="ourButton">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
