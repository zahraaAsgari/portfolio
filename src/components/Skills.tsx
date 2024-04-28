"use client"
import React from 'react'
import TypingText from './CustomText'
import { useSectionInView } from '@/lib/customhooks'
import { skillsData } from '@/lib/data'
import {motion} from "framer-motion"

const fadeInVariants={
    initial:{
opacity:0,
y:100
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.05 *index
        }
    }),
   
}

const Skills = () => {
    const {ref}=useSectionInView("Skills");
  return (
    <section ref={ref} id="skills" className="section-style text-center max-w-[53rem]">
    <TypingText title="| My Skills"/>
    <ul className='flex flex-wrap flex-center gap-5 '>
        {skillsData.map((skill,index)=>(
            <motion.li
            variants={fadeInVariants} 
            initial="initial"
            whileInView="animate"
            viewport={{
                once:true
            }}
            custom={index}
           
            className='border border-black/[0.1] py-3 px-4 text-3xl bg-white dark:text-gray-300 dark:bg-white/10 text-gray-800 
            rounded-xl' key={index}>{skill}</motion.li>
        ))}
    </ul>
   
</section>
  )
}

export default Skills