"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathnames = pathname?.split("/").filter((x) => x) || [];

    return (
        <div>

            <nav>
                <ul className="flex items-center space-x-3 text-sm font-medium px-4 md:px-16 pt-20 pb-4 bg-gray-100 dark:bg-gray-900">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>

                    {pathnames.map((value, index) => {
                        const href = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={href} className="flex items-center space-x-3">
                                <span className="text-gray-500">›</span>
                                {isLast ? (
                                    <span className="capitalize text-indigo-500">
                                        {value.replace(/-/g, " ")}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="capitalize text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        {value.replace(/-/g, " ")}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
