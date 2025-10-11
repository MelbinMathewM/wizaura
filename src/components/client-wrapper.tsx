"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LogoLoader from "@/components/logo-loader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            {loading && <LogoLoader />}
            {children}
        </>
    );
}
