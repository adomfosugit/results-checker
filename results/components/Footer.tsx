import { Copyright } from 'lucide-react';
import Link from 'next/link';
import React from 'react'



const Footer = () => {
  return (
    <div className=' w-full bg-blue-800 z-10 shadow-lg p-4 flex justify-center'>
        <div className='py-4  '>
        <div className='flex-col max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 border-b-[1px] mb-2 '>
            <p className='font-bold text-2xl text-blue-500 italic tracking-wider'>Checkers Hub</p>
            <p className='text-white font-bold text-xl'>For further Enquiry</p>
            <p className='text-white'> Phone :  0559441309</p>
            <p className='text-white'> Email: Ddagyemang3@gmail.com </p>
        </div>
            <div className='text-white flex gap-x-2 justify-center'>
               <Copyright color='white'/> 2024 | 
               <Link href='https://fosucodev.vercel.app/' className='hover:text-blue-500'> Developer</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;