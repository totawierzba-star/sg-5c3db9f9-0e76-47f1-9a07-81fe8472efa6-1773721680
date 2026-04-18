import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Supported locales
const locales = ['pl', 'zh', 'cs', 'hi', 'sk', 'it', 'vi'] as const;
type Locale = (typeof locales)[number];

// Default locale
const defaultLocale: Locale = 'pl';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  
  // Redirect www to non-www
  if (hostname.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = hostname.replace("www.", "");
    return NextResponse.redirect(url, 301);
  }

  // Language detection - only for root path on first visit
  if (pathname === "/" && !request.cookies.get("preferredLanguage")) {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const normalizedAcceptLanguage = acceptLanguage.toLowerCase();
    
    // Check if browser prefers Chinese
    const prefersChinese = normalizedAcceptLanguage.includes("zh");
    const prefersVietnamese = normalizedAcceptLanguage.includes("vi");
    
    if (prefersChinese) {
      const url = request.nextUrl.clone();
      url.pathname = "/zh";
      
      const response = NextResponse.redirect(url);
      // Set cookie to remember preference
      response.cookies.set("preferredLanguage", "zh", {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        path: "/",
      });
      return response;
    } else if (prefersVietnamese) {
      const url = request.nextUrl.clone();
      url.pathname = "/vi";

      const response = NextResponse.redirect(url);
      response.cookies.set("preferredLanguage", "vi", {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        path: "/",
      });
      return response;
    } else {
      // Set Polish as preferred language
      const response = NextResponse.next();
      response.cookies.set("preferredLanguage", "pl", {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        path: "/",
      });
      return response;
    }
  }
  
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
