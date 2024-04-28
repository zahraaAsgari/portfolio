import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import type { sectionLinkType } from '@/types';

export const useSectionInView=(sectionLink:sectionLinkType,threshold=0.5)=>{
    const {setActiveLink,lastClickTime}=useActiveSectionContext();

    const {ref,inView}=useInView({
      threshold
    });
    useEffect(()=>{

  if(inView && Date.now() - lastClickTime > 1000){
  setActiveLink(sectionLink)
  }
    },[inView,setActiveLink,lastClickTime,sectionLink]);

   return {ref,inView}
  }



export function useActiveSectionContext<ActiveSectionContextType>(){

    const context=useContext(ActiveSectionContext);

    if(context===null){
throw new Error(
    "there is an Error "
)
    }
    return context; 
}