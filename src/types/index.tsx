import { links } from "@/lib/data";

export type sectionLinkType=typeof links[number]["name"]

export type childrenProps={
    children:React.ReactNode
    }
    
 export type ActiveSectionContextType={
        activeLink:sectionLinkType;
        setActiveLink:React.Dispatch<React.SetStateAction<sectionLinkType>>;
        lastClickTime:number;
        setLastClickTime:React.Dispatch<React.SetStateAction<number>>;
     }