"use client"
import React from "react";
import { TypingText } from "@/components"
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/customhooks";

const About = () => {

  const{ref}=useSectionInView("About",0.75)
  
  return (
    <section ref={ref} id="about" className="section-style">
        <TypingText title="| About Me"/>
        <motion.p
         initial={{y:100,opacity:0}}
         animate={{y:0 ,opacity:1}}
         className=" font-normal  text-center dark:text-gray-50 text-[1rem] sm:text-[1rem] !leading-[2] "
        >
          I am a self-taught {''}<span className="about-span">front-end developer {' '}
          </span>
          with a passion for {' '}
          <span className="about-span">creating visually {' '}</span>
          appealing and user-friendly {' '}
        <span className="about-span">
          web experiences. {' '}
        </span>
        proficient in <span className="about-span"> HTML,CSS,JAVASCRIPT </span> and  <span className="about-span">REACT.JS</span> with a focus on <span className="about-span">
        Responsive Design
          </span> and modern web technologies .Dedicated to continuous learning and staying <span className="about-span">up-to-dat</span>.
     
        </motion.p>
    </section>
  )
}

export default About
