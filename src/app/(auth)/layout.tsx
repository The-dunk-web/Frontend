import React from 'react';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-auth-pattern flex min-h-screen items-center justify-center bg-cover bg-center">
      {children}
    </div>
  );
}
