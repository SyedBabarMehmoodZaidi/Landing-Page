import React from 'react'
import Link from 'next/link'
const ServicePage = () => {
  return (
    <div>
      <h1>Service Page</h1>
      <ul>
      <li><Link href="/">Go To Home Page</Link></li>
      <li><Link href="/components/about" >Go To About Page</Link></li>
      <li><Link href="/components/contact">Go To Contact Us Page</Link></li>
      </ul>
    </div>
    )
}

export default ServicePage
