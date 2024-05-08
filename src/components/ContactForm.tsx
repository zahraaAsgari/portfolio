'use client';

import { contactFormSchema } from "@/lib/zodValidation";
import  emailjs  from "@emailjs/browser";
import React , { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { ZodError } from "zod";


interface FormData {
    name: string;
    email: string;
    message: string;
  }
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const { pending } = useFormStatus();
  const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {


        event.preventDefault();
        try {
          // Validate form data
          contactFormSchema.parse(formData);
    
          // Send email if validation succeeds
          if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            form.current
          ) {
            const result = await emailjs.sendForm(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
              form.current,
              process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            );
            toast.success('Your email has been sent successfully.');
    
            // Reset form fields after successful submission
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          }
        } catch (error) {
          if (error instanceof ZodError) {
            // Display validation error messages
            error.errors.forEach(err => {
              toast.error(err.message);
            });
          } else {
            // Display other error messages
            toast.error('An error occurred while sending your email.');
          }
        }
      };
    
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
  return (
    <>
    
    <form className="flex flex-col gap-2 mt-10 w-full" ref={form} onSubmit={sendEmail}>
        <input name='name' type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required maxLength={100} className='form-style h-14' />
        <input name='email' type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required maxLength={100} className='form-style h-14' />
        <textarea name='message' placeholder="Your Message" value={formData.message} onChange={handleChange} required maxLength={300} className='form-style h-52 pt-1 dark:text-gray-800' />
        <Toaster richColors/>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{' '}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
            </>
          )}
        </button>
      </form>
    </>
  )
}

export default ContactForm;