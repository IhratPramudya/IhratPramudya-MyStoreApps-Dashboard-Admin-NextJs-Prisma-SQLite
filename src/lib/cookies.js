import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export function setCookie(name, value, options={}) {
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        path: "/",
        ...options
    }

    cookies().set(name, value, cookieOptions)
    redirect("/")
}

export function getCookie(name) {
    const cookie = cookies().get(name);
    return cookie?.value || null;
}
