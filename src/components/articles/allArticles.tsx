'use client';
import React, { useEffect, useState } from 'react';

import ArticleCard from './articleCard';
import { ArticleType } from '@/types/interfaces';

export default function AllArticles() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getAllArticles() {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message);
        setArticles(data.articles);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllArticles();
  }, []);

  if (isLoading)
    return (
      <div className="text-center">
        <div className="flex min-h-[200px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
        </div>
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (articles.length === 0) return <div className="text-center">No Articles found.</div>;

  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
}
