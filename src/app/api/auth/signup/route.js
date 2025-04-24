import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createJWT } from "@/lib/utils";
import { db } from "@/lib/db";

export async function POST(request) {
    try {
        const data = await request.json();
        const exitingCustomer = await db.buyerMaster.findUnique({
            where: {
                email: data.email
            }
        });

        if(exitingCustomer) {
            return NextResponse.json(
                {
                    message: "User with this email already exists",
                },
                { status: 409 }
            );
        }
            
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(data.password, salt); 

        const newCustomer = await db.buyerMaster.create({
            data: {
                customerName: data.name,
                email: data.email,
                password: hashedPassword
            }
        });

        const token = await createJWT(newCustomer)

        return NextResponse.json(
            {
                message: "User Created Successfully",
                data:  newCustomer,
                token: token,
            },
            { status: 201 }
        );
        
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Something Went Wrong",
                error: error.message,
            },
            { status: 500 }
        );
    }
}