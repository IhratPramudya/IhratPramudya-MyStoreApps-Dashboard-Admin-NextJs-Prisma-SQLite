// import { db } from "@/lib/db";

// export async function getDashboardData() {
//     const customerData = await db.buyerMaster.findMany({
//         orderBy: {
//             createdAt: "asc"
//         },
//         include: {
//             sales: true
//         }
//     });

//     const salesMasterData = await db.salesMaster.findMany({
//         include: {
//             buyer: true,
//             salesTransaction: true
//         },
//         orderBy: {
//             SODateTime: "desc"
//         }
//     });

//     const totalbuyers = customerData?.filter((customer)=>customer.sales?.length>0).length;
//     const totalRevenue = salesMasterData.reduce(    
//         (acc, sale) => acc+sale.grandTotalPrice,
//         0
//     )
    
//     const dashboardData = {
//         totalbuyers,
//         totalCustomers: customerData.length,
//         totalRevenue,
//         orders: salesMasterData?.splice(0, 5),
//     };

//     return dashboardData;
// }