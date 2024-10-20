import Link from 'next/link';
import React from 'react'

const Homepage = () => {
  return (
    <div className='bg-custom-bg bg-cover bg-center h-screen text-white'>
      <h1>HomePage</h1>
      <ul className='flex justify-center space-x-8'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/components/about" >About</Link></li>
        <li><Link href="/components/contact">Contact Us</Link></li>
        <li><Link href="/components/service">Service Page</Link></li>
      </ul>
    </div>
  )
}

export default Homepage;
