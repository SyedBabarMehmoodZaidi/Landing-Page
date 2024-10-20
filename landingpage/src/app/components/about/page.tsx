import React from "react";
import Link from "next/link";
const AboutPage = () => {
    return(
        <div>
            <h1>About Page</h1>
            <ul>
        <li><Link href="/">Go To Home Page</Link></li>
        <li><Link href="/components/contact">Go To Contact Us Page</Link></li>
        <li><Link href="/components/service">Go To Service Page</Link></li>
      </ul>
        </div>
    )
}

export default AboutPage;