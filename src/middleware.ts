import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define routes---
const protectedRoutes = ['/orders', '/profile', '/add-visa', '/add-crypto-wallet'];
const publicRoute = ['/sign-in', '/sign-up', '/forget-password', '/reset-password'];

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  const token = request.cookies.get('isAuthenticated')?.value;
  // console.log(request.cookies);
  // console.log(request.cookies);
  // console.log(token);
  // const token = 'fff';

  const isProtectedRoute = protectedRoutes.some((route) => pathname.includes(route));
  const isPublicRoute = publicRoute.some((route) => pathname.includes(route));

  // If user tries to access protected routes without token
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // If user tries to access login page with token
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
