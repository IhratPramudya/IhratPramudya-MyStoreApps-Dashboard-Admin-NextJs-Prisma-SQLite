import { jwtTokenVerification } from "./authAction";
import { db } from "@/lib/db";

export async function getBuyer() {
    await jwtTokenVerification();
    const buyers = await db.buyerMaster.findMany({
        where: {
            sales: {
                some: {
                    
                }
            }
        }
    })

    return buyers;
}