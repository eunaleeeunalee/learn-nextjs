"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navi.module.css"

export default function Navi(){
    const path = usePathname();

    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li><Link href ="/">Home</Link></li> {path === "/"? "yoyo":""}
                <li><Link href ="/about-us">About us</Link></li> {path === "/about-us"? "yoyo":""}
            </ul>
        </nav>
    )
}