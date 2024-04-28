
"use client"
import { Fragment } from "react"
import TypingText from "./CustomText"
import {projectsData} from "@/lib/data"
import { useSectionInView } from "@/lib/customhooks";
import Project from "./Project"



const Projects = () => {
  const{ref}=useSectionInView("Projects")
  return (
    <section ref={ref} id="projects" className="section-style">
        <TypingText title="| My Projects"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project,index)=>(
            <Fragment key={index}>
           <Project {...project}/>
            </Fragment>
))}
        </div>

    </section>
  )
}

export default Projects;



