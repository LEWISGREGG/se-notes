"use client"
import Image from 'next/image';

function Bulb() {
  return (
    <div className="absolute -left-12 -top-8 rotate-12 mix-blend-color-dodge 
    animate-pulse duration-300 z-10 w-[200px] xl:w-[260px] ">
        <Image
        src='/bulb.png'
        width= {200}
        height= {200}
        alt='logo'
        priority={true}
        className=" w-full h-full"/>
    </div>
  )
}

export default Bulb