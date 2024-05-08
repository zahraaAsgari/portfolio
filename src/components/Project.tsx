'use client'
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, git, imageUrl, demo,desc }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="mb-3 sm:mb-8 last:mb-0 "
     
    >
    <section className="flex flex-col w-full border border-black/5 dark:border-black/10 bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 leading-relaxed relative rounded-lg overflow-hidden mb-3 h-full  hover:bg-gray-200 transition">
                <Image src={imageUrl}
                alt ={title}
                quality={95}
                 className="w-[100%] h-[100%] object-fill p-2 rounded-2xl"/>
                <div className="flex flex-col items-center justify-between mb-2 gap-2">
                 <h3 className="text-center mb-1 font-semibold leading-relaxed text-xl dark:text-gray-500 text-gray-700">{title}</h3>
                 <p className="text-center text-sm text-gray-600 pb-1 px-2 leading-7 dark:text-gray-300">{desc}</p>
                 <div className="flex gap-2 flex-wrap mt-5 sm:mt-auto">
                   <a
                   className="bg-black/80 px-2 py-1 rounded-full uppercase tracking-wide text-white text-[.8rem] font-medium"
                    href={git} target="_blank">Github</a>
                   
                 
                   <a
                   className="bg-black/80 px-2 py-1 rounded-full uppercase tracking-wide text-white text-[.8rem] font-medium"
                    href={demo} target="_blank">online</a>
           
            </div>
            </div>
               
              </section>
          
    </motion.div>
  );
};

export default Project;
