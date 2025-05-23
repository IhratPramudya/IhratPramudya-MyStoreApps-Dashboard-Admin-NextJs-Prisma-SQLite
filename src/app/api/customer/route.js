import { db } from "@/lib/db";
import { verifyJWT } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const token = request?.cookies.get("customer_jwt_token")?.value;
        const decodedToken = await verifyJWT(token);

        if (!decodedToken) {
            return NextResponse.json(
                {
                    message: "Unauthorized",
                },
                {status: 401}
            )

        }

        const customerData = await db.buyerMaster.findUnique({
            where: {
                email: decodedToken.email
            }
        })
        

        return NextResponse.json(
            {
                message: "Customer data fetched successfully",
                data: customerData
            },
            {status: 200}
        )
        
    } catch (error) {
        return NextResponse.json(
            {
                message: "Something went wrong",
                error: error.message,
            },
            {status: 500}
        )
    }
}