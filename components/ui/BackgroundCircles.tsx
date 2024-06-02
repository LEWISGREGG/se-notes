'use client'
import { motion } from "framer-motion";


type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    }} 
    transition={{
        duration: 2.5,
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-red-500 rounded-full h-[20px] w-[20px] mt-32 animate-ping"></div>
        <div className="absolute border border-red-500 rounded-full h-[40px] w-[40px] mt-32 animate-ping"></div>
        <div className="absolute border border-red-500 rounded-full h-[60px] w-[60px] mt-32 animate-ping"></div>
        <div className="absolute rounded-full border border-red-400 opacity-20 h-[80px] w-[80px] mt-32 animate-pulse"></div>
        <div className="absolute border border-red-500 rounded-full h-[100px] w-[100px] mt-32 animate-ping"></div>
    </motion.div>
  )
}