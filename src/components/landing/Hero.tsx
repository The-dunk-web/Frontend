import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bg-red-500">
        <div className="container mx-auto flex justify-between p-4">
          <h1 className="logo">
            <Link href="/">The Dunk Web</Link>
          </h1>
          <nav>
            <ul className="flex items-center gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/red-rome">Red Rome</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="heroSection grid h-svh place-content-center">Hero</div>
    </>
  );
};

export default Hero;
