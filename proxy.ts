// proxy.ts
import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';

export function proxy(request: NextRequest) {
  const nonce = randomBytes(16).toString('base64');
  const isDev = process.env.NODE_ENV === 'development';
  
  // CSP diferente para dev e produção
  let csp: string;
  
  if (isDev) {
    // Ambiente de desenvolvimento (mais permissivo)
    csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://*.vercel.app https://*.githubusercontent.com",
      "font-src 'self' data:",
      "connect-src 'self' https://api.github.com https://vercel.live ws://localhost:* http://localhost:*",
      "frame-src 'self' https://vercel.live",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');
  } else {
    // Ambiente de produção (mais restritivo)
    csp = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://vercel.live https://vercel.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://*.vercel.app https://*.githubusercontent.com",
      "font-src 'self' data:",
      "connect-src 'self' https://api.github.com https://vercel.live",
      "frame-src 'self' https://vercel.live",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');
  }
  
  const response = NextResponse.next();
  
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('x-nonce', nonce);
  
  // Outros headers de segurança (mantém para ambos ambientes)
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};