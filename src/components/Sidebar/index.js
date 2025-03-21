/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import Image from "next/image";
import { HomeIcon, ShoppingBagIcon, SwatchIcon, UsersIcon } from "../icons";

export default function Sidebar() {
    const menuItems = [
        {
            id: 1,
            text: "Dashboard",
            url: "/",
            icon: <HomeIcon/>
        },
        {
            id: 2,
            text: "Users",
            url: "/users",
            icon: <UsersIcon/>
        },
        {
            id: 3,
            text: "Product Type",
            url: "/product-type",
            icon: <SwatchIcon/>
        },
        {
            id: 4,
            text: "Products",
            url: "/products",
            icon: <ShoppingBagIcon/>
        }
    ]


    return (
        <div className="sidebar-main">
            <div className="p-4 m-4">
                <h1 className="text-3xl font-semibold" >eStore</h1>
            </div>

            <ul className="ml-5 mx-auto text-lg flex flex-col">
                {
                    menuItems.map((menuItems, key) => {
                        return (
                            <li key={menuItems.id}>
                                <Link href={menuItems.url}>
                                    <div className="sidebar-list-item">
                                        <span className="mx-2">{menuItems.icon}</span>
                                        {menuItems.text}
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="sidebar-usercard">
                <div className="flex flex-row m-5 mb-8">
                    <Image
                        height={50}
                        width={50}
                        src="/user.png"
                        alt="User Avatar"
                        radius="sm"
                        className="border-gray-600 rounded-full border-2"
                    />
                    <div className="m-auto text-lg"> John Doe </div>
                </div>
            </div>
        </div>
    )
}