import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const { cookies } = request;

	if (
		(!cookies.has('user_name') || !cookies.has('job_title')) &&
		request.nextUrl.pathname !== '/login'
	) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	if (
		cookies.has('user_name') &&
		cookies.has('job_title') &&
		request.nextUrl.pathname === '/login'
	) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};
