import React from 'react';
import Logo from '../global/Logo';
import ActiveLink from '../global/ActiveLink';
import User from './User';

export default function Navbar() {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-10 border-b-2 bg-stone-950/80">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Logo />

          <nav className="hidden text-sm font-medium md:block">
            <ul className="flex items-center gap-6">
              <li>
                <ActiveLink
                  className="border-b-2 border-transparent px-2 py-1 hover:text-red-500"
                  href="/"
                >
                  Home
                </ActiveLink>
              </li>

              <li>
                <ActiveLink
                  className="border-b-2 border-transparent px-2 py-1 hover:text-red-500"
                  href="/products"
                >
                  Products
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  className="border-b-2 border-transparent px-2 py-1 hover:text-red-500"
                  href="/red-room"
                >
                  Red Rooms
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  className="border-b-2 border-transparent px-2 py-1 hover:text-red-500"
                  href="/services"
                >
                  Services
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  className="border-b-2 border-transparent px-2 py-1 hover:text-red-500"
                  href="/articles"
                >
                  Articles
                </ActiveLink>
              </li>
            </ul>
          </nav>
          <div className="user">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
}
