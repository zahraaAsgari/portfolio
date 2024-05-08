import React from "react"
import { FaReact } from "react-icons/fa";
import { FaHtml5,FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

import Image1 from "../../public/photosite.jpg";
import Image2 from "../../public/photosite1.jpg";
import Image3 from "../../public/image.png";
import Image4 from "../../public/e-commerce.png";
import Image5 from "../../public/recipe.png";
import Image6 from "../../public/dashboard.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Tourify",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    demo:"https://zahraaasgari.github.io/tourify/",
    imageUrl: Image1,
    desc:"Explore our tourism website, crafted with HTML, CSS, and JavaScript. Discover stunning destinations, plan your next adventure, and immerse yourself in the beauty of nature."
  },
  {
    title: "Metaverse",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    demo:"https://metaverse-navy.vercel.app/",
    imageUrl: Image2,
      desc:"Experience the Metaverse website, an immersive platform built with Next.js and enhanced with advanced animations powered by Framer Motion. Explore the cutting-edge features of Next.js while enjoying seamless transitions and interactive elements crafted with Framer Motion."

  },
  {
    title: "Real State",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    demo:"https://homeland-sandy.vercel.app/",
    imageUrl: Image3,
      desc:"Discover your dream home on our React and Tailwind CSS website, powered by the Fetch API for seamless property listing retrieval.Find your perfect match with ease and style."
  },
  {
    title: "E-Commerce",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    demo:"https://e-commerce-olive-six.vercel.app/",
    imageUrl: Image4,
      desc:"The E-commerce website, developed with React, empowers users to customize their shopping experience by effortlessly adding and deleting options to their cart. Enjoy a dynamic interface designed for intuitive navigation and seamless shopping."
  },
  {
    title: "Food Recipies",
    demo:"https://food-recipes-one-pi.vercel.app/",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    imageUrl: Image5,
      desc:"Explore our tourism website, crafted with HTML, CSS, and JavaScript. Discover stunning destinations, plan your next adventure, and immerse yourself in the beauty of nature."
  },
  {
    title: "Dashboard",
    git:"https://github.com/zahraaAsgari/dashboard",
    demo:"https://dashboard-six-eosin-66.vercel.app/",
    imageUrl: Image6,
      desc:"Our Dashboard project, developed with React, SCSS, and Recharts, provides intuitive data management and visualization features. It offers a sleek and responsive interface, powered by React's Context API for state management."
  },
] as const;

export const skillsData = [
  React.createElement(FaHtml5),
  React.createElement(FaCss3Alt),
  React.createElement(IoLogoJavascript),
  React.createElement(FaReact),
  React.createElement(SiNextdotjs),
  React.createElement(TbBrandFramerMotion),
  React.createElement(SiTypescript)

] as const;

