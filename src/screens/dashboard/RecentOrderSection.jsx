"use client"

import { InformationIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import PurchasedProductsModal from "@/components/ui/PurchasedProductsModal";
import { useState } from "react";


const RecentOrderSection = ({orders}) => {

    const [isProductModalOpen, setIsProductModalOpen] = useState(false)

    return (
        <>
            <div className="grid dashboard-card">
            <h1 className="text-2xl font-bold">Recent Orders</h1>
            <table className="custom-table">
                <thead className="border-y-2 border-gray-400">
                    <tr>
                        <th className=""> Sr. No.</th>
                        <th className="">Buyer's Name</th>
                        <th className="">Date</th>
                        <th className="">Total</th>
                        <th className="">Payment Mode</th>
                        <th className="">Products</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 font-medium text-lg text-center">
                    {
                       orders.length > 0 ? (
                        orders.map((order, key) => (
                            <tr key={order.id}>
                                <td>{key + 1}</td>
                                <td>{order.buyer.customerName}</td>
                                <td>{order.SODateTime.toString()}</td>
                                <td>{order.grandTotalPrice}</td>
                                <td>{order.paymentMode}</td>
                                <td>
                                    <Button
                                        type="button"
                                        className="bg-transparent text-blue-700 p-0"
                                        onClick={() => {
                                            setIsProductModalOpen(true)
                                        }}
                                    >
                                        <InformationIcon />
                                    </Button>
                                </td>
                            </tr>
                           ))
                       ) : (
                            <tr>
                                <td colSpan={5} className="!text-center">
                                    No orders Found.
                                </td>
                            </tr>
                       )
                       
                    }
                </tbody>
            </table>
            </div>
            {
                isProductModalOpen && (
                    <PurchasedProductsModal 
                        setIsOpen={setIsProductModalOpen}
                    />
                )
            }
        </>
    )
}

export default RecentOrderSection;