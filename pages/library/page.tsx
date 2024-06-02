"use client"
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from '@/public/variants';
import Checkmark from "../../public/assets/Checkmark.svg";
import { Button } from '@/components/ui/button';
import CountUp from "react-countup";
import A from "../../public/assets/A.jpg";
import B from "../../public/assets/B.jpg";
import C from "../../public/assets/C.jpg";
import D from "../../public/assets/D.jpg";
import E from "../../public/assets/E.jpg";
import F from "../../public/assets/F.jpg";
import G from "../../public/assets/G.jpg";
import H from "../../public/assets/H.jpg";
import I from "../../public/assets/I.jpg";
import J from "../../public/assets/J.jpg";
import K from "../../public/assets/K.jpg";
import L from "../../public/assets/L.jpg";
import M from "../../public/assets/M.jpg";
import N from "../../public/assets/N.jpg";
import O from "../../public/assets/O.jpg";
import P from "../../public/assets/P.jpg";
import Q from "../../public/assets/Q.jpg";
import R from "../../public/assets/R.jpg";
import S from "../../public/assets/S.jpg";
import T from "../../public/assets/T.jpg";
import U from "../../public/assets/U.jpg";
import V from "../../public/assets/V.jpg";
import W from "../../public/assets/W.jpg";
import X from "../../public/assets/X.jpg";
import Y from "../../public/assets/Y.jpg";
import Z from "../../public/assets/Z.jpg";
import NextNProgress from 'nextjs-progressbar';

const currentYear = new Date().getFullYear();

<NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />

function Library() {
return (
    
    <div className="px-[20px] lg:px-20 mx-auto">
    <motion.h1 
    variants={fadeIn ('left', 0.4)} 
    initial="hidden"
    animate="show" 
    exit="hidden"  
    className="text-gray-700 text-center text-[32px] lg:py-[22px] font-extrabold dark:text-gray-50 animate-pulse"
    id='hero'>
    eTextbook Library
    </motion.h1>
    <motion.p 
    variants={fadeIn ('right', 0.4)} 
    initial="hidden"
    animate="show" 
    exit="hidden"  
    className="pt-[16px] pb-[40px] text-center text-gray-800 lg:py-[18px] lg:text-xl font-medium dark:text-gray-50">
    Necessary Structural Engineering Books for Advanced Studies
    </motion.p>

    <motion.div // 1
    variants={fadeIn ('down', 0.2)} 
    initial="hidden"
    animate="show" 
    exit="hidden"
    className='flex sm:max-w-md md:flex md:max-w-xl lg:flex xl:max-w-3xl mx-auto mb-4'>
    <div className='flex flex-1 xl:gap-x-6'>
      <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after-absolute after:top-0 after:right-0'>
      <div className='text-2xl xl:text-4xl font-extrabold text-red-600 mb-2'>
      <CountUp start={0} end={20} duration={5}/> +
      </div>
      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Books</div>
      </div>
      <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after-absolute after:top-0 after:right-0'>
      <div className='text-2xl xl:text-4xl font-extrabold text-red-600 mb-2'>
      <CountUp start={0} end={100} duration={10}/> +
      </div>
      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Formulas</div>
      </div>
      <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after-absolute after:top-0 after:right-0'>
      <div className='text-2xl xl:text-4xl font-extrabold text-red-600 mb-2'>
      <CountUp start={0} end={200} duration={20} /> +
      </div>
      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projects</div>
      </div>
    </div>
    </motion.div>

    <motion.div 
    variants={fadeIn ('up', 0.2)} 
    initial="hidden"
    animate="show" 
    exit="hidden" 
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-[24px]">

        <div className="w-full rounded-[8px] bg-slate-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300"> 
                <h3 className="font-medium text-red-700 text-[18px] text-center" >
                SE Structural Engineering Reference Manual 
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Alan Williams, PhD, SE, FICE, C Eng
                </p>
                <div className="flex justify-center items-center">
            <Image 
            src={A}
            alt="A"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Vertical Forces, Incidental Lateral Forces 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Reinforced Concrete Design 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Structural Steel Design 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Timber Design... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300  py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={` https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedStructuralEngineeringReference-Manual.pdf?alt=media&token=6e0fe6bf-9e65-40f7-8d68-4b3f16ced86a`} target="_blank">Download</Link>
            </Button>
        </div>

    <div className="w-full rounded-[8px] bg-purple-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                ACI 318-08 Building Code Requirements
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                James K. Wight, Basile G. Rabbat
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={B}
            alt="B"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Requirements for concrete mixtures 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Methods of analysis 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Composite compression members 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Permissible stresses in prestressing steel... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedACI%20318-08%20Building%20Code%20Requirements%20for%20Structural%20Concrete%20(ACI%20318-08)%20and%20Commentary_MyCivil.ir.pdf?alt=media&token=e4fd187d-064b-4d3b-a641-32cf6369f108`} target="_blank">Download</Link>
            </Button>
        </div>


        <div className="w-full rounded-[8px] bg-rose-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                AISC Steel Construction Manual
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                William A. Thornton, Mark V. Holland
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={C}
            alt="C"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design of Compression Members
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design Considerations for Bolts 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design of Connecting Elements
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design of Simple Shear Connections... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedAISC_Steel_construction_manual_fourteenth_edi.pdf?alt=media&token=af7a379e-3db5-4ea9-a51b-8ddafc996903`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-red-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                International Building Code 2012
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                International Code Council
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={D}
            alt="D"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Administaration and Enforcement 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Means of egress
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Interior environment 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Glass and glazing... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefined2012-IBC.pdf?alt=media&token=adcb4349-304a-4943-ad62-39f966348c92`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-stone-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                2017 National Electrical Safety Code® NESC®
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Institute of Electrical and Electronics Engineers
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={E}
            alt="E"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Electric Supply Stations and Equipment
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Overhead Electric Supply
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Underground Electric Supply
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Work Rules for the Operation... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefined2017%20NESC.pdf?alt=media&token=90db0553-4048-4232-b3f5-784bae30555e`} target="_blank">Download</Link>
            </Button>
        </div>


        <div className="w-full rounded-[8px] bg-orange-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Design of Wood Structures — ASD/LRFD
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Donald E. Breyer, Kenneth J. Fridley
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={F}
            alt="F"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Properties of Wood and Lumber Grades 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Structural Glued Laminated Timber 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Nailed and Stapled Connections 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Wood Structural Panels... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedDesign_of_Wood_Structures.pdf?alt=media&token=f0d3f94b-2f37-45a7-bcdd-028ff7ded6b1`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-sky-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Reinforced Concrete Design of Tall Buildings
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Bungale S. Taranath, Ph.D., P.E., S.E.
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={G}
            alt="G"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Lateral Load-Resisting Systems 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Seismic Design Examples and Details 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Wind Loads
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Tall Buildings... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefinedreinforced-concrete-design-of-tall-building.pdf?alt=media&token=a6b2f5d0-4858-4e24-964b-7f9b82f68ed2`} target="_blank">Download</Link>
            </Button>
        </div>


        <div className="w-full rounded-[8px] bg-yellow-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Fundamentals of Structural Engineering
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Jerome J. Connor, Susan Faraji
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={H}
            alt="H"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Statically Determinate Structures 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Statically Determinate Plane Frames
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Statically Determinate Curved Members 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Multi-span Horizontal Structures... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedFundamentals%20of%20Structural%20Engineering%20Second%20Edition%20by%20Jerome%20J.%20Connor%20and%20Susan%20Faraji.pdf?alt=media&token=a806114d-bc26-466e-9bf8-e817f97122d7`} target="_blank">Download</Link>
            </Button>
        </div>


        <div className="w-full rounded-[8px] bg-lime-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Principles of Foundation Engineering
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Braja M. Das, Nagaratnam Sivakugan
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={I}
            alt="I"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Geotechnical Properties and Soil Exploration 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Natural Soil Deposits and Subsoil Exploration 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Foundation Analysis
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Lateral Earth Pressure... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefinedprinciples-of-foundation-engineering-9th-edition-si-edition-by-braja-m-das-nagaratnam-sivakugan.pdf?alt=media&token=acc60b17-eaa6-4ff7-9ef7-34703121c2bc`} target="_blank">Download</Link>
            </Button>
        </div>


        <div className="w-full rounded-[8px] bg-green-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Design of Concrete Structures 
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                David Darwin, Charles W. Dolan, Arthur H. Nilson
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={J}
            alt="J"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design of Concrete Structures 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Flexural Analysis and Design of Beams 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Shear and Diagonal Tension in Beams
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Analysis and Design for Torsion... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefineddesign-of-concrete-structures-fifteenth-edition.pdf?alt=media&token=18433c0c-45a9-4c55-b1a0-bf7db12050db`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-indigo-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Structural Steel Design
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Jack C. McCormacand, Stephen F. Csernak
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={K}
            alt="K"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Analysis of Tension Members 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Building connections 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Composite beams 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Desigb of Steel Buildings... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefinedstructural-steel-design-5e-mccormac-amp-csernakpdf.pdf?alt=media&token=ba2d646a-92e7-4c18-b3a3-97cca8c91567`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-cyan-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Structural Masonry
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Arnold W. Hendry BSc, PhD, DSc, FleE
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={L}
            alt="L"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Masonry in tension, shear and biaxial stress 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Laterally loaded unreinforced walls 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Reinforced and prestressed masonry 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            The strength of masonry arch structures... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefinedstructural-masonry.pdf?alt=media&token=20d6c7d7-359d-46f7-9218-9d1303650ec3`} target="_blank">Download</Link>
            </Button>
        </div>


        <div className="w-full rounded-[8px] bg-zinc-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Principles of Geotechnical Engineering 
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Braja M. Das, Khaled Sobhan
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={M}
            alt="M"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Plasticity and Structure of Soil 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Stresses in a Soil Mass 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Shear Strength of Soil
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Soil Bearing Capacity for Shallow Foundations... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefinedgeotechnical-engineering-principles-das-9th-edition.pdf?alt=media&token=c7a00681-ea25-49bc-9a7a-db1108706b39`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-violet-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Earthquake Engineering for Structural Design
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Victor Gioncu, Federico M. Mazzolani
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={N}
            alt="N"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Advances in Conception about Earthquakes 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Earthquakes and Ground Motions 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Ground Motions and Structures 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Advances in Seismic Design Methodologies... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedEarthquake%20Engineering%20for%20Structural%20Design%20by%20Victor%20Gioncu%20and%20Federico%20M.%20Mazzolani.pdf?alt=media&token=4cc9d8f5-c0da-4e8e-ae22-6409c07bf726`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-fuchsia-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Structural Design of Masonry
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Dilip Khatri, PhD, SE
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={O}
            alt="O"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Masonry Components and Structural Engineering 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Shear Wall Buildings with Rigid Diaphragms 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Structural Engineering and Analysis 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Working Stress Design... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefinedstructural-design-of-masonrypdf-2.pdf?alt=media&token=7a90790a-cf42-4393-a05b-4cf8625437af`} target="_blank">Download</Link>
            </Button>
        </div>


        <div className="w-full rounded-[8px] bg-pink-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Stability Design Criteria for Metal Structures
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Ronald D. Ziemian
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={P}
            alt="P"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Thin-Walled Metal Construction 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Horizontally Curved Steel Girders
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Composite Columns and Structural Systems
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Stability of Angle Members... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedGuide%20To%20Stability%20Design%20Criteria%20for%20Metal%20Structures%20Sixth%20Edition%20By%20Ronald%20D%20Ziemian.pdf?alt=media&token=dde4a253-1c95-42b2-9dfd-ba96a0277997`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-emerald-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Steel Drsigners Handbook
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Branko E Gorenc, Ron Tinyou, Arun A Syam
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={Q}
            alt="Q"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Compression & Beam-Column Members 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Plastic Design 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Structural Framing 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Beams & Girders... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedSteel.pdf?alt=media&token=89ea91c3-8e69-490b-b256-394e55892aeb`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-yellow-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Structural Depth Reference Manual
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Alan Williams, PhD, SE, FICE, C Eng
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={R}
            alt="R"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Prestressed Concrete Design 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design of Wood Structures 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design of Reinforced Masonry
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Reinforced Concrete Design... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedStructural%20Depth%20Reference%20Manual%20for%20the%20Civil%20PE%20Exam%20Third%20Edition%20Alan%20Williams.pdf?alt=media&token=28f283f8-ee92-401a-8202-5882ca839b43`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-sky-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                MUTCD 2009
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                US Department of Transportation
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={S}
            alt="S"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Part 1 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Part 3  
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Part 6 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Part 8... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedMUTCD%202009.pdf?alt=media&token=c2e21065-d51d-421f-b27d-671672e717fc`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-red-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                SP-4 14 Formwork for Concrete
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                David W. Johnston
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={T}
            alt="T"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Materials, Accessories, and Proprietary Products
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Loads and Pressures  
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Shoring and Floor Loads in Multi-Story Structures 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Design of Form Shores and Bracing... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2FundefinedSP-004%208TH%20Formwork%20for%20Concrete.pdf?alt=media&token=1810132b-9fd0-40fc-be4d-aad3d4457694`} target="_blank">Download</Link>
            </Button>
        </div>

        <div className="w-full rounded-[8px] bg-green-200 p-6 flex flex-col lg:justify-between shadow-2xl hover:scale-95 ease-in duration-300">
                <h3 className="font-medium text-red-700 text-[18px] text-center">
                Design and Control of Concrete Mixtures
                </h3>
                <p className="pt-[12px] text-gray-700 lg:text-[18px] text-center">
                Steven H. Kosmatka, Michelle L.Wilson
                </p>
                <div className="flex justify-center items-center">
            <Image
            src={U}
            alt="U"
            width={200}
            height={200}
            className='rounded-lg mt-2 border object-center'
            />
            </div>
                <ul className="flex flex-col gap-y-2 pt-4 text-gray-600">
                <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Introduction to Concrete
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Supplementary Cementitious Materials  
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Mixing Water for Concrete 
            </li>
            <li className="flex items-center gap-x-2 text-gray-700 hover:font-semibold ease-in-out duration-200">
            <span>
            <Image
            src={Checkmark}
            alt="Checkmark"
            width={20}
            height={20}
            />
            </span>
            Chemical Admixtures for Concrete... 
            </li>
                </ul>
            <Button className="mt-[16px] font-medium bg-gray-50 ease-in-out duration-300 py-[14px] px-8 text-red-700 rounded-[4px] hover:bg-gray-100 hover:text-blue-800">
            <Link href={`https://firebasestorage.googleapis.com/v0/b/troubleshoot-chat.appspot.com/o/files%2Fundefinedeb001.15.pdf?alt=media&token=35980798-55fb-4ba6-8daf-452c748ab7c8`} target="_blank">Download</Link>
            </Button>
        </div>
    </motion.div>

        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer mt-2">
        <div className="flex items-center justify-center">
        <Image
        className="h-10 w-10 rounded-full filter hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out"
        width={10}
        height={10}
        src="https://www.svgrepo.com/show/272155/bridges.svg" alt="page"/>
        </div>
        </footer>
        </Link>

    <section className="flex justify-center items-center max-w-7xl rounded-lg text-black-700 mt-8">
        <div className="font-bold">&copy; {currentYear} Structural Eng LLC. ALL RIGHTS RESERVED</div>
    </section>
</div>
  )
}

export default Library