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
  },
  {
    title: "Metaverse",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    demo:"https://metaverse-navy.vercel.app/",
    imageUrl: Image2,
  },
  {
    title: "Real State",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    demo:"https://homeland-sandy.vercel.app/",
    imageUrl: Image3,
  },
  {
    title: "E-Commerce",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    demo:"https://e-commerce-olive-six.vercel.app/",
    imageUrl: Image4,
  },
  {
    title: "Food Recipies",
    demo:"https://food-recipes-one-pi.vercel.app/",
    git:"https://github.com/zahraaAsgari/Food-Recipes_React_API",
    imageUrl: Image5,
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

