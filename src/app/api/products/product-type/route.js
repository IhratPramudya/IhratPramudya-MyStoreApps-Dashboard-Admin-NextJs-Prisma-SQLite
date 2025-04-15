import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const productType = await db.productType.findMany();
        return NextResponse.json({
            status: 200,
            message: "Product fetched successfully!",
            data: productType
        });
    } catch(error) {
        return NextResponse.json({
            message: "Something Went Wrong",
            error: error.message
        }, {
            status: 500
        })
    }
}