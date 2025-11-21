// middleware.ts
// Place this file in the ROOT of your project (same level as package.json)

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that require authentication
const protectedRoutes = ["/dashboard"];

// Routes for authentication (login/signup)
const authRoutes = ["/login", "/signup"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes and static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Get all cookies and check for session
  // Better Auth can use different cookie names depending on configuration
  const cookies = request.cookies;
  
  // Check for various possible session cookie names
  const sessionToken = 
    cookies.get("better-auth.session_token")?.value ||
    cookies.get("better-auth.session")?.value ||
    cookies.get("__session")?.value ||
    cookies.get("session")?.value;

  const isAuthenticated = !!sessionToken;

  // Debug logging (check Vercel logs)
  console.log(`[Middleware] Path: ${pathname}`);
  console.log(`[Middleware] Cookies:`, cookies.getAll().map(c => c.name));
  console.log(`[Middleware] Is Authenticated: ${isAuthenticated}`);

  // Protected routes - require authentication
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      console.log("[Middleware] No session, redirecting to /login");
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Auth routes - redirect to dashboard if already logged in
  if (authRoutes.includes(pathname) && isAuthenticated) {
    console.log("[Middleware] Already logged in, redirecting to /dashboard");
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};