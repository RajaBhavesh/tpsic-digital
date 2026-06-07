import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Admin login page — always allow
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    return NextResponse.next()
  }

  // Admin pages — check cookie
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('sb-pqasrjsxnplolzjwbjzo-auth-token')
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}