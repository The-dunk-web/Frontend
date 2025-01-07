import React from 'react';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="container mx-auto min-h-screen p-5 py-28">{children}</div>;
}
