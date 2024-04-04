"use client";
import { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineLogout,
} from "react-icons/ai";
import { BiBell, BiAnalyse } from "react-icons/bi";
import { FiCreditCard } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const menuItems = [
        {
            icon: AiOutlineUser,
            text: "Kategorie",
            notification: 0,
            link: "/categories",
        },
        // { icon: BiBell, text: "Updates", notification: 4 },
        // { icon: FiCreditCard, text: "Payment", notification: 0 },
        // { icon: AiOutlineShoppingCart, text: "My Order", notification: 0 },
        // { icon: AiOutlineSetting, text: "Admin Setting", notification: 0 },
        // { icon: BiAnalyse, text: "Add New", notification: 0 },
        // { icon: AiOutlineShoppingCart, text: "My Products", notification: 8 },
        // { icon: BiAnalyse, text: "Stocks", notification: 0 },
        // { icon: AiOutlineSetting, text: "Account Setup", notification: 0 },
        // { icon: AiOutlineUser, text: "Manage User", notification: 0 },
        // { icon: AiOutlineLogout, text: "Logout", notification: 0 },
    ];

    return (
        <div
            className={`transition-width duration-300 ${
                collapsed ? "w-16" : "w-64"
            } bg-xcommerce-gradient flex h-full flex-col text-black`}
        >
            <Link
                href="/"
                className="mb-5 flex items-center justify-between px-4 py-2"
            >
                <span
                    className={`text-2xl font-bold transition-opacity duration-300 ${
                        collapsed ? "w-0 opacity-0" : "opacity-100"
                    }`}
                >
                    xCommerce
                </span>
                <AiOutlineMenu
                    className="cursor-pointer text-xl"
                    onClick={toggleSidebar}
                />
            </Link>
            <nav>
                {menuItems.map(
                    ({ icon: Icon, text, notification, link }, index) => (
                        <Link
                            href={link}
                            key={index}
                            className="flex items-center justify-between p-2 text-sm hover:bg-gray-700"
                        >
                            <div className="flex items-center">
                                <Icon className="text-lg" />
                                <span
                                    className={`ml-4 ${
                                        collapsed ? "hidden" : "block"
                                    }`}
                                >
                                    {text}
                                </span>
                            </div>
                            {notification > 0 && (
                                <span
                                    className={`ml-4 ${
                                        collapsed ? "hidden" : "block"
                                    }`}
                                >
                                    {notification}
                                </span>
                            )}
                        </Link>
                    ),
                )}
            </nav>
        </div>
    );
};

export default Sidebar;
