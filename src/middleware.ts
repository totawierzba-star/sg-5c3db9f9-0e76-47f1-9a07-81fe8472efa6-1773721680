import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files, API routes, and Next.js internal routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("/favicon.ico") ||
    pathname.match(/\.(png|jpg|jpeg|svg|ico|xml|txt|html)$/)
  ) {
    return NextResponse.next();
  }

  // For root path or any non-/en path, serve Polish content from /pages
  if (pathname === "/" || !pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // For /en paths, serve English content from /pages/en
  if (pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except static files and API routes
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.ico|.*\\.xml|.*\\.txt|.*\\.html).*)",
  ],
};