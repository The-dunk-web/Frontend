import React from 'react';
import { Button } from '@/components/ui/button';
import { press_start_2p } from '@/constants/fonts';
import AllArticles from '../articles/allArticles';
import Link from 'next/link';

export default function ArticlesView() {
  return (
    <div className="min-h-screen">
      {/* <header className="bg-articles-pattern flex h-[400px] flex-col items-center justify-end gap-5 bg-cover bg-center pb-10">
        <h1 className={`${press_start_2p.className} text-2xl tracking-wider text-red-600`}>
          Dark Archives
        </h1>
        <p className="max-w-[800px] text-center text-xl">
          Uncensored insights from the shadows of the digital underworld
        </p>
        <Link href="/articles/new">
          <Button variant="ourButton">Write Your Own</Button>
        </Link>
      </header> */}

      <header className="bg-articles-pattern mb-10 flex h-[400px] flex-col items-center justify-end gap-5 bg-cover bg-center pb-10">
        <h1 className={`${press_start_2p.className} text-2xl tracking-wider text-red-600`}>
          Dark Archives
        </h1>
        <p className="mb-20 max-w-[800px] text-center text-xl">
          Uncensored insights from the shadows of the digital underworld
        </p>

        <Link href="/articles/new">
          <Button variant="ourButton">Write Your Own article</Button>
        </Link>
      </header>
      <div className="container mx-auto p-10">
        <AllArticles />
      </div>
    </div>
  );
}
