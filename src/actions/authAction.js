"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { createJWT, verifyJWT } from "@/lib/utils";
import { getCookie, setCookie } from "@/lib/cookies";
import { cookies } from "next/headers";

export async function loginUser(formData) {
    const data = {
        userName: formData.get("userName"),
        password: formData.get("password")
    }


    console.log(data)

    const user = await db.adminUser.findUnique({
        where: {
            userName: data.userName
        }
    })

    if(user === null) {
        return redirect(`/login?errorMessage=Invalid credentials. Please try again.`);
    }

    const isValidPassword = await bcrypt.compare(data.password, user?.password);
    console.log(isValidPassword)

    if(!user || !isValidPassword) {
        return redirect(`/login?errorMessage=Invalid credentials. Please try again.`);
    }

    const token = await createJWT(user)
    await setCookie("jwt_token", token, {maxAge: 2*60*60})
    redirect("/")
}

export async function jwtTokenVerification() {
    const token = await getCookie("jwt_token")
    const tokenData = await verifyJWT(token)


    if(!tokenData) {
        await deleteCookies("jwt_token")
        return redirect("/login")
    }

    return tokenData;
}

export async function getUserData() {
    const decodedToken = await jwtTokenVerification();
    const userData = await db.adminUser.findUnique({
        where: {
            id: decodedToken.id
        }
    })

    console.log("inijijininiiuhu", userData.userName) 

    return userData;
}


export async function deleteCookies(name) {
    const cookie = await cookies()
    cookie.delete(name)
}


export async function logoutUser() {
    await deleteCookies("jwt_token");
    redirect("/login")
}

