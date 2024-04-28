
"use client"

import { motion, Variants } from "framer-motion";

interface TypingTextProps {
  title: string;
}

const TypingText: React.FC<TypingTextProps> = ({ title }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h2
      className="text-[18px] mt-[2rem] font-medium text-center text-gray-800 dark:text-gray-50 py-[2rem]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default TypingText;
