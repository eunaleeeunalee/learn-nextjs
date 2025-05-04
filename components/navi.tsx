"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navi(){
    const path = usePathname();

    return(
        <nav>
            <ul>
                <li><Link href ="/">Home</Link></li> {path === "/"? "yoyo":""}
                <li><Link href ="/about-us">About us</Link></li> {path === "/about-us"? "yoyo":""}
            </ul>
        </nav>
    )
}