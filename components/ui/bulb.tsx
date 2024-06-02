"use client"
import Image from 'next/image';

function Bulb() {
  return (
    <div className="absolute -left-8 xl:-left-12 -top-8 rotate-12  
    animate-pulse duration-700 z-10 w-[100px] xl:w-[160px] opacity-5 hidden dark:block">
        <Image
        src='/bulb.png'
        width= {200}
        height= {200}
        alt='logo'
        priority={true}
        className="w-full h-full"/>
    </div>
  )
}

export default Bulb