import React from 'react'
import Link from 'next/link';
const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        <li><Link href="/">Go To Home Page</Link></li>
        <li><Link href="/components/about" >Go To About Page</Link></li>
        <li><Link href="/components/service">Go To Service Page</Link></li>
        
      </ul>
    </div>
  )
}

export default ContactPage;
