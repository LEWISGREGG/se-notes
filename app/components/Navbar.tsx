"use client"
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NextNProgress from 'nextjs-progressbar';

function Navbar() {
  return (
    <div className='flex items-center justify-between space-x-2 font-semibold py-5 sticky top-0 z-50 max-w-7xl mx-auto'> 
    <NextNProgress options={{ easing: 'ease', speed: 500 }} />
    <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://www.svgrepo.com/show/246228/ruins-ancient.svg"
            width={40}
            className="rounded-full hover:scale-105 cursor-pointer transition-transform duration-500 ease-in-out"
            height={40}
            alt="logo"
          />
        </Link>
        <Link href="/"> 
        <h1 className="font-bold leading-7 animate-pulse">Structural <span className="font-extrabold leading-7 text-red-600">Engineering</span></h1>
        </Link>
    </div>


    <div>
        <Button
        className=" px-4 py-2 my-2 font-bold bg-gray-50 shadow-lg rounded-full text-red-600 active:scale-90 
        transition duration-150 transform hover:shadow-xl hover:bg-gray-100 ">
        <Link href={`/library`}>Library</Link>
        </Button>
    </div>

    <div>
        <Button
        className=" px-4 py-2 my-2 font-bold bg-gray-50 shadow-lg rounded-full text-red-600 active:scale-90 
        transition duration-150 transform hover:shadow-xl hover:bg-gray-100 ">
        <Link href={`/contact`}>Get in Touch</Link>
        </Button>
    </div>

    <div className="static"><ModeToggle/></div>
    </div>
  )
}

export default Navbar