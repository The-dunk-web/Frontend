'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import LogoutButton from '../auth/Logoutlogic';
import { Button } from '../ui/button';
import useAuthStore from '@/middleware/authMiddleware';

export default function UserMenu() {
  const { isAuthenticated, user } = useAuthStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={user?.profile}
            alt={`${user?.firstName}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="me-2 mt-2 flex flex-col gap-2 rounded-none border-2 border-stone-100 bg-stone-950 p-3 text-stone-100">
        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100">
          <Link href="/profile">My Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100">
          <Link href="/orders">My Orders</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/">Home</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/products">Products</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/red-rome">Red Room</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/red-rome">Services</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-none border-2 border-transparent pb-1 hover:border-b-2 hover:border-b-stone-100 focus:bg-stone-950 focus:text-stone-100 md:hidden">
          <Link href="/red-rome">Articles</Link>
        </DropdownMenuItem>

        {isAuthenticated ? (
          <DropdownMenuItem className="focus:bg-stone-950 focus:text-stone-100">
            <LogoutButton />
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="focus:bg-stone-950 focus:text-stone-100">
            <Link href="/sign-in">
              <Button className="w-full rounded-none border-2 bg-transparent text-stone-100 hover:border-red-600 hover:bg-red-600 hover:text-stone-100">
                Sign in
              </Button>
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
