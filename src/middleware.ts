import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/auth', '/register'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');

  if (publicRoutes.includes(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.redirect(new URL(`/users/1`, req.url));
    }

    return NextResponse.next();
  }

  if (token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/auth', req.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
