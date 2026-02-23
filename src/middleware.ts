import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware: redireciona www → non-www (301 permanente)
 * Garante que o Google indexe apenas https://engenhariabiomedica.com
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect www.engenhariabiomedica.com → engenhariabiomedica.com
  if (host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const url = request.nextUrl.clone();
    url.host = newHost;
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Executar em todas as rotas exceto assets estáticos e API interna do Next
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.svg).*)'],
};
