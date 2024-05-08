
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <section  className="section-style ">
      <div className="flex flex-col">
        <div className="mb-[20px] h-[2px] bg-gray-900 dark:bg-white dark:opacity-10 opacity-5" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-bold text-[16px] tracking-wider dark:text-white text-gray-950">
            Zahra Asgari
          </h4>
          <p className="font-normal text-[14px] text-gray-900 dark:text-white opacity-50">
            Copyright © 2023 . All rights reserved.
          </p>

          <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" className="site-links text-xl"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank" className="site-links text-xl"><FaGithubSquare /></a>
          </div>
        </div>
        </div>

    </section>
  )
}

export default Footer