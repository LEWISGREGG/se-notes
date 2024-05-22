"use client"
import Image from 'next/image';

function TopLeftImage() {
  return (
    <div className="absolute right-0 top-0 rotate-90 z-10 w-[120px] xl:w-[200px] opacity-30">
        <Image 
        src='/top-left-img.png'
        width= {400}
        height= {400}
        alt='top-left-img'/>
    </div>
  )
}

export default TopLeftImage