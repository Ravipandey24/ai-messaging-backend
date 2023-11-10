import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/api")) {
    response.headers.append('Access-Control-Allow-Credentials', "true")
    response.headers.append('Access-Control-Allow-Origin', 'chrome-extension://nganmcllpfiikomjgajnpbkcahgnifaj') // replace this your actual origin
    response.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    response.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
  }
  // console.log(response);
  
  //...
  return response;
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/:path*',
  }