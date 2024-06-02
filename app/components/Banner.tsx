"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Banner() {

    const [text, count] = useTypewriter({
    words: [
        "Learn Structural Engineering",
        "<Enjoy a moment/>",
    ],
    loop: true,
    delaySpeed: 2000,
    })   
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-2 justify-between font-medium px-10 py-5 mb-10 max-w-7xl mx-auto">
        <div className="divide-y divide-slate-500 dark:divide-slate-200 duration-1000"> 

        <button className="">
        <Link href={`https://structure-blog.sanity.studio/structure/blog`}>
        <h1 className="text-3xl font-extrabold animate-pulse duration-1000">SE Notes</h1></Link>
        </button>

        <p className="mt-5 md:mt-2 text-gray-800  dark:text-gray-100 max-w-sm">Important Formulas</p>
        </div>

        <div>
        <h1 className="text-xl lg:text-2xl font-semibold scroll-px-6">
        <span className="mr-2">{text}</span>
        <Cursor cursorColor="red"/>
        </h1> 

        </div>

        <div className="divide-y divide-slate-500 dark:divide-slate-200">
        <h2 className="mt-5 md:mt-0 font-extrabold">Structural Engineering {" "}
        <span className="text-red-600 font-bold">notes</span>{" "}
        that help in daily engineering life
        </h2>
        </div>
        
        </div>
    );
}
export default Banner