import ArticleDetails from '@/components/articles/articleDetails';
import React from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export default async function page({ params }: { params: { articleId: string } }) {
  const { articleId } = params;
  const res = await fetch(`${API_URL}/api/articles/${articleId}`);
  const data = await res.json();

  return <ArticleDetails article={data.article} />;
}
