"use client"

import React, { useState } from "react"; 
import { links } from "@/lib/data"
import { motion } from "framer-motion"
import Link from "next/link"
import clsx from 'clsx';
import { FaBars } from "react-icons/fa";
import { useActiveSectionContext } from "@/lib/customhooks";
import MobileNav from "./MobileNav";

const Header = () => {
  const { setActiveLink, activeLink, setLastClickTime } = useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);


  

  return (
    <>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen}/>
    <nav  className="z-[999] fixed top-0 right-0 left-0 h-[3.7rem] bg-white dark:bg-gray-950 dark:text-gray-50 bg-opacity-80 w-full shadow-lg shadow-black[0.04] backdrop-blur-[0.5] sm:h-[3.55rem] sm:top-2">
      <div className="flex items-center mt-3 px-3 md:px-16 sm:px-5 justify-between w-[100%] md:w-[90%] xl:w-[80%] mx-auto">
        <div className="text-xl font-semibold text-gray-800 dark:text-gray-200"> 
        Zahra Asgari
        </div>
        <div>
       
         
        <ul className=" hidden sm:flex flex-wrap gap-[1rem] w-[22rem] justify-center items-center sm:flex-nowrap sm:w-[initial] font-medium sm:gap-5 text-gray-500 text-[.9rem] ">
        {links.map(link=>(
       <motion.li key={link.hash} className="flex py-[0.1rem] sm:py-[0.3rem] px-[0.3rem] items-center justify-center h-3/4 relative "
       initial={{y:-100,opacity:0}}
       animate={{y:0 ,opacity:1}}
       >
              <Link
               className={clsx("flex-center  w-full font-medium hover:text-gray-800 dark:text-grayt-400 dark:hover:text-gray-300 transition" , {"text-gray-950 dark:text-gray-200": activeLink===link.name})}
               onClick={()=>{
                setActiveLink(link.name)
           
              }}
                href={link.hash}>
                  {link.name}
              {
                link.name ===activeLink && (
                  <motion.span
                  className="bg-gray-100 p-x-2 dark:bg-gray-800 -z-10 rounded-full inset-0 absolute"
                  layoutId="activeLink"
                  transition={{
                    type:"spring",
                    stiffness:500,
                    damping:50

                  }}
                 
                  />

                )
              }
              </Link>
            </motion.li>
        ))}
      
    </ul>
    
<div className="block dark:text-gray-300 text-gray-800 sm:hidden font-bold text-2xl transition-all duration-200" onClick={()=>setIsOpen(true)}>

 
  <FaBars/>
</div>
        </div>
        </div>
    </nav>
    </>
  );
};

export default Header;
