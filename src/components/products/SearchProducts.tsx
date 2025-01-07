import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function SearchProducts() {
  return (
    <div className="mx-auto mb-10 flex max-w-[600px] items-center">
      <Input
        className="h-12 w-[75%] rounded-none border-2 autofill:bg-transparent"
        type="text"
        placeholder="Search Products"
      />
      <Button className="h-12 w-[25%] rounded-none border-2 bg-stone-100 font-bold text-stone-950 hover:bg-transparent hover:text-slate-100">
        Search
      </Button>
    </div>
  );
}
