'use client'
import TypingText from './CustomText';
import { useSectionInView } from '@/lib/customhooks';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");
 
  return (
    <section id="contact" ref={ref} className="section-style w-full sm:w-[30rem] mb-4">
      <TypingText title="| Contact Me " />
      <p className="text-gray-700 dark:text-gray-500 text-base text-center -mt-2">Please contact me directly at <a className="underline text-gray-800 dark:text-gray-300 font-semibold tracking-wide">zahraasgari345@gmail.com</a> or through form below.</p>
      <ContactForm/>
    </section>
  );
};

export default Contact;
