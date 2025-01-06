'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import useAuthStore from '@/hooks/useAuthStore';
import LogoutButton from '../auth/Logoutlogic';

export default function UserMenu() {
  const { isAuthenticated } = useAuthStore(); // Get the authentication state and logout function

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src="/skull.jpg"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="me-2 mt-2 flex flex-col gap-2 rounded-none border-2 border-stone-100 bg-stone-950 p-3 text-stone-100">
        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100">
          <Link href="/">My Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100">
          <Link href="/">My Cart</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/products">Products</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/red-rome">Red Rome</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/red-rome">Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/red-rome">Articles</Link>
        </DropdownMenuItem>

        {/* Conditionally render Sign-in or Logout */}
        {isAuthenticated ? (
          <DropdownMenuItem className="focus:bg-stone-950 focus:text-stone-100">
            <LogoutButton />
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="focus:bg-stone-950 focus:text-stone-100">
            <Link href="/sign-in">Sign in</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
