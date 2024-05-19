"use client"
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import NextNProgress from 'nextjs-progressbar';
function Navbar() {
  return (
    
    <div className='flex items-center justify-between space-x-2 font-semibold py-5 sticky top-0 z-50  max-w-7xl mx-auto'> 
    <NextNProgress options={{ easing: 'ease', speed: 500 }} />
    <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://www.svgrepo.com/show/246228/ruins-ancient.svg"
            width={40}
            className="rounded-full"
            height={40}
            alt="logo"
          />
        </Link>
        <Link href="/"> 
        <h1 className="font-bold decoration-solid border-t-2 border-gray-500 sm:border-none">Structural Engineering</h1>
        </Link>
        
    </div>
    <div>
        <Button
        className=" px-4 py-2 my-2 font-bold bg-gray-50 shadow-md rounded-full text-red-600 active:scale-90 
        transition duration-150 transform hover:shadow-xl hover:bg-gray-100 ">
        <Link href={`https://structure-blog.sanity.studio/structure/blog`}>Studio Editor</Link>
        </Button>
        
    </div> 
    <div>
        <Button
        className=" px-4 py-2 my-2 font-bold bg-gray-50 shadow-md rounded-full text-red-600 active:scale-90 
        transition duration-150 transform hover:shadow-xl hover:bg-gray-100 ">
        <Link href={`/`}>Library</Link>
        </Button>
        
    </div>
    <div className="static"><ModeToggle/></div>
    

    
    </div>
  )
}

export default Navbar