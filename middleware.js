import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = cookies().get('token')?.value;


  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/onebox', request.url));
  }

 
  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/google-login', request.url));
  }


  if (pathname !== '/' && !token) {
    return NextResponse.redirect(new URL('/google-login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/onebox',
  ],
};
