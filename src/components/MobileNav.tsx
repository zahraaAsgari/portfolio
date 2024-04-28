import { useActiveSectionContext } from '@/lib/customhooks';
import { links } from '@/lib/data'
import clsx from 'clsx';
import Link from "next/link"
import { IoClose } from 'react-icons/io5';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const MobileNav = ({ setIsOpen, isOpen }: Props) => {
  const { setActiveLink, activeLink } = useActiveSectionContext();
  const navAnime = isOpen ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`${navAnime} fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-[40%] z-[1000] md:hidden bg-white bg-opacity-95 xs:flex flex items-start py-2 justify-between dark:bg-gray-950 dark:text-gray-50 `}>
      <ul className="flex flex-col w-full h-full items-center justify-center gap-8">
        {links.map(link => (
          <li key={link.hash} className="flex items-start justify-start relative ">
            <Link
              className={clsx("flex items-center justify-start w-full hover:text-gray-800 font-semibold text-gray-800 text-xl dark:text-gray-500 dark:hover:text-gray-300 transition", {"text-gray-950 dark:text-gray-200": activeLink === link.name })}
              onClick={() => {
                setActiveLink(link.name)
              }}
              href={link.hash}>
              {link.name}
            </Link>
          </li>
        ))}

      </ul>
      <div className="block dark:text-gray-300 text-gray-800 sm:hidden font-bold text-3xl px-2 transition-all duration-200"
       onClick={()=>setIsOpen(false)}>
        <IoClose />
      </div>
    </div>
  )
}

export default MobileNav
