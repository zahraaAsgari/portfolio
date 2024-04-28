"use client"
import React from 'react'
import TypingText from './CustomText'
import { useSectionInView } from '@/lib/customhooks'
import { FaPaperPlane } from 'react-icons/fa'
import  {sendEmail}  from '@/actions/sendEmail'
import { useFormStatus } from "react-dom";

const Contact = () => {
const{ref}=useSectionInView("Contact");
const {pending}=useFormStatus();

  return (
    <section id="contact" ref={ref} className="section-style w-full sm:w-[30rem] mb-4">
     <TypingText title="| Contact Me "/>
     <p className="text-gray-700 dark:text-gray-500 text-base text-center -mt-2">Please contact me directly at <a className="underline text-gray-800 dark:text-gray-300 font-semibold">zahraasgari345@gmail.com</a>{" "}or through form below.</p>
<form action={async (formData)=>{
    await sendEmail(formData);
}}
className="flex flex-col gap-2 mt-10 w-full">
    <input name='email' type="email" placeholder="Your Email"  required maxLength={100} className='form-style h-14'/>
    <textarea name='message' placeholder="Your Message" required maxLength={300} className='form-style h-52 pt-1 dark:text-gray-800'/>
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
</form>
    </section>
  )
}

export default Contact