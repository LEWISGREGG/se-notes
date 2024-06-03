"use client"
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from '@/public/variants';
import Checkmark from "../../public/assets/Checkmark.svg";
import { Button } from '@/components/ui/button';
import CountUp from "react-countup";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "sonner";


const currentYear = new Date().getFullYear();


function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params:any) => {

    const toastId = toast.loading("Sending your message, please wait....")

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID

    emailjs.send(serviceId, templateId, params,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
          throttle: 5000, 
                  },
            }
          )
        }
        


        const onSubmit = (data:any) => {
          const templateParams = {
            to_name: "Serhio",
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
          };
      
          sendEmail(templateParams);
        };

return (
  
  <>
  <Toaster richColors={true} />
  
<article className="relative w-full flex flex-col items-center justify-center space-y-8">
<div className="flex flex-col items-center justify-center space-y-6 w-3/4">
<h1 className="text-red-500 font-semibold text-center text-4xl capitalize">Contact Us For Structural Questions</h1>
<p className="text-center font-light">Structural Engineering LLC is proud to provide commercial and residential structural 
engineering consulting services. <br /> We are happy to answer any questions you may have about our services. <br />
Please do not hesitate to contact us by using the contact form on this page.</p>
</div>
<form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
      <input placeholder="Name"
            type="text" {...register("name", {
            required: "This field is required!",
            minLength: {
            value: 3,
            message: "Name should be atleast 3 characters long.",
            },
          })} 
          className='w-full border border-red-600 p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50'/>
      {
      errors.name && <span className='inline-block self-start text-red-500'>{errors.name.message}</span>
      }


      <input type="email" placeholder="Email" {...register("email", { required: "This field is required!" })} className='w-full border border-red-600 p-2 rounded-md shadow-lg text-foreground 
      focus:outline-none focus:ring-2 focus:ring-red-500/50' />
      {
      errors.email && <span className='inline-block self-start text-red-500'>{errors.email.message}</span>
      }


      
      <textarea placeholder="Message"
      {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 200,
              message: "Message should be less than 200 characters",
            },
            minLength: {
              value: 20,
              message: "Message should be more than 20 characters",
            },
          })} 
      className='w-full border border-red-600 p-2 rounded-md shadow-lg text-foreground 
      focus:outline-none focus:ring-2 focus:ring-red-500/50'/>
      {errors.message && (
          <span className="inline-block self-start text-red-500">
            {errors.message.message}
          </span>
        )}



      <input 
      value="Cast your message!"
      className='px-10 py-4 rounded-md shadow-lg border overflow-hidden border-red-600 border-solid group 
      bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 
      hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
      relative bg-white dark:bg-gray-900 group-hover:bg-opacity-0 cursor-pointer transition-all duration-500 ease-in-out' 
      type="submit" />
    </form>

    <section className="flex justify-center items-center max-w-7xl rounded-lg text-black-700 mt-2">
        <div className="font-bold">&copy; {currentYear} Structural Eng LLC. ALL RIGHTS RESERVED</div>
    </section>
</article>
</>
  )
}

export default Contact