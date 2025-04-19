"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { createJWT } from "@/lib/utils";
import { getCookie, setCookie } from "@/lib/cookies";

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

    console.log(user)

    const isValidPassword = await bcrypt.compare(data.password, user?.password);

    if(!user || !isValidPassword) {
        return redirect(`/login?errorMessage=Invalid credentials. Please try again.`);
    }

    const token = await createJWT(user)
    setCookie("jwt_token", token, {maxAge: 2*60*60})
    redirect("/")
}

// export async function jwtTokenVerification() {
//     const token = getCookie("jwt_token")
// }

// export async function getUserData() {

// }