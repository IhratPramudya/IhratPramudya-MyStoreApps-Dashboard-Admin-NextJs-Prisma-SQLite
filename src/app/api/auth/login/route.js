import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createJWT } from "@/lib/utils";
import { db } from "@/lib/db";

export async function POST(request) {
    try {
        const data = await request.json();

        const exitingCustomer = await db.buyerMaster.findUnique({
            where: {
                email: data.email,
            },
        });

        if (!exitingCustomer) {
            return NextResponse.json(
                {
                    message: "User Not Found",
                },
                { status: 404 }
            )
        }

        const isValidPassword = await bcrypt.compare(
            data.password,
            exitingCustomer.password
        )

        if (!isValidPassword) {
            return NextResponse.json(
                {
                    message: "Invalid Credentials. Please try again",
                },
                { status: 401 }
            )
        }

        const token = await createJWT(exitingCustomer);

        return NextResponse.json(
            {
                message: "Login Successful",
                data: exitingCustomer,
                token,
            }
        )

    } catch (error) {
        return NextResponse.json(
            {
                message: "Something Went Wrong",
                error: error.message,
            },
            { status: 500 }
        )
    }
}