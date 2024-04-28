"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import Link from "next/link"
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useActiveSectionContext, useSectionInView } from "@/lib/customhooks"


const Home = () => {

const{ref}=useSectionInView("Home")
const{setLastClickTime,setActiveLink}=useActiveSectionContext();


return(
    <section  ref={ref} id="home" className="p-3 flex-center flex-col relative scroll-mt-[100rem]" >
   
        <motion.div className="flex-center"
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{
            type:"tween",
            duration:0.5
         }}
         >
                <Image className="w-[9rem] h-[12rem] rounded-full object-cover border-[0.2rem] border-white p-[0.2rem] shadow-xl sm:mb-6 mb-6" src="/profileimg.png" width={100} height={100} alt="portfolio image" />
        </motion.div>
        <motion.p
          initial={{y:100,opacity:0}}
          animate={{y:0 ,opacity:1}}
          transition={{
            delay:0.125,
            duration:1
          }}
          className="font-medium text-center text-2xl sm:text-2xl !leading-[1.5] pb-8"
        >
          Hi There, 
        <span className="font-bold">I'm Zahra.</span>a<span className="font-bold">front-end developer</span> I enjoy
        building <span className="italic">sites & web apps</span>
        </motion.p>
        <motion.div
        initial={{y:100,opacity:0}}
        animate={{y:0 ,opacity:1}}
        transition={{
            delay:0.2,
            duration:0.75
        }}
         className="flex-center pb-1 px-4 gap-4 sm:gap-5 font-medium sm:text-lg text-base sm:flex-row flex-col">
            <Link 
            onClick={()=>{
              setActiveLink("Contact")
              setLastClickTime(Date.now())}}
            href="#contact" 
            className="flex-center text-white gap-2 bg-gray-900 rounded-full p-3 scale-transition group text-base">
              Contact me here
            <BsArrowRight className="group-hover:translate-x-1"/></Link>
            <a href="/CV.pdf" className="bg-white p-3 rounded-full flex-center text-gray-600 gap-2 text-base  scale-transition hover:text-gray-800" download>Download CV<HiDownload/></a>
            <a href="https://linkedin.com" target="_blank" className="site-links"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank" className="site-links"><FaGithubSquare /></a>
        </motion.div>

    </section>
  )
}

export default Home;
