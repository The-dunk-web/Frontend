'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface ActiveLinkProps {
  children: Readonly<React.ReactNode>;
  className?: string;
  href: string;
}

export default function ActiveLink({ children, ...props }: ActiveLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      className={`${props.className} ${pathName === props.href ? 'border-b-stone-100' : ''}`}
      href={props.href}
    >
      {children}
    </Link>
  );
}
