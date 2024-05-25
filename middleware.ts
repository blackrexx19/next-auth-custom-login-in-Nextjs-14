import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const isAuthenticated = !!token;
    const isProfilePage = req.nextUrl.pathname.startsWith("/profile");
    const isLoginPage = req.nextUrl.pathname.startsWith("/login");

    if (!isAuthenticated && isProfilePage) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }
    if (isAuthenticated && isLoginPage) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}