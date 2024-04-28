"use client"
import React,{useState,createContext} from 'react';
import { links } from "@/lib/data"
import type { ActiveSectionContextType, childrenProps, sectionLinkType } from '@/types';


 export const ActiveSectionContext=createContext<ActiveSectionContextType|null>(null);

export default function ActiveSectionContextProvider ({children}:childrenProps) {
    const [activeLink,setActiveLink]=useState<sectionLinkType>("Home");
    const [lastClickTime,setLastClickTime]=useState(0);
    

  return (
    <ActiveSectionContext.Provider value={{
        setActiveLink,activeLink,lastClickTime,setLastClickTime 
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

