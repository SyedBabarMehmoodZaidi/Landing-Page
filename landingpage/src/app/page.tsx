import Link from 'next/link';
import React from 'react'

const Homepage = () => {
  return (
    <div className='bg-custom-bg bg-cover bg-center h-screen text-white'>
      
    
      <ul className='Border flex justify-center space-x-20 border-y-4  p-2 border-white'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/components/about" >About</Link></li>
        <li><Link href="/components/contact">Contact Us</Link></li>
        <li><Link href="/components/service">Service Page</Link></li>
      </ul>
 

<p className='absolute bottom-16 left-1/2 transform -translate-x-1/2 p-2 '>Syed Babar Mehmood Zaidi
I am a passionate YouTuber with a diverse skill set in graphic design, video editing, animation, and vlogging. Having completed my graduation, I am currently part of the Governor Initiative, where I am expanding my expertise in website development and artificial intelligence. I have a solid command of technologies like HTML, CSS, TypeScript, JavaScript, and Tailwind CSS. My goal is to continually innovate and create impactful digital experiences.
</p>

   </div>  
  )
}

export default Homepage;
