'use client';
import ArticleDetails from '@/components/articles/articleDetails';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export default function Page() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`${API_URL}/api/articles/${articleId}`);
        const data = await res.json();
        setArticle(data.article);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [articleId]);

  if (loading)
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
      </div>
    );
  if (!article) return <div>Article not found</div>;

  return <ArticleDetails article={article} />;
}
