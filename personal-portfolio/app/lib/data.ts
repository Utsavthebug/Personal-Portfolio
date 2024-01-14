'use client';

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import DashboardImage from '@/public/projectImage/dashboardpage.png'
import EmiImage from '@/public/projectImage/emi.png'
import NikeLandingPage from '@/public/projectImage/nikelandingpage.png'
import WhatsAppClone from '@/public/projectImage/whatsappclone.png'

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
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;
  
  export const experiencesData = [
    {
      title: "Graduated in BSC.CSIT",
      location: "Tribhuwan University",
      description:
        "I Completed by Four years Bachelors degree in Computer Science",
      icon: React.createElement(LuGraduationCap),
      date: " 2017 - 2022",
    },
    {
      title: "Backend Internship",
      location: "",
      description:
        "I worked as backend intern and worked with API development and Scaling in express.js and mongodb",
      icon: React.createElement(CgWorkAlt),
      date: " 3 months",
    },
    {
      title: " React Front-End Developer",
      location: "Web Experts Nepal ",
      description:
        "I worked as a React front-end developer. Worked on two large Scale Project. Staying here I upskilled myself to Full Stack developer",
      icon: React.createElement(CgWorkAlt),
      date: " 2022 - Present",
    }
  ] as const;
  
  export const projectsData = [
    {
      title: "Dashboard",
      description:
        "This is my personal project where I developed a simple dashboard page which can be reused on various ecommerce platform as admin dashboard.",
      tags: ["React","React-Calendar", "Material UI"],
      imageUrl: DashboardImage,
    },
    {
      title: "Emi 3.0",
      description:
        "This a Enterprise Level Project in which i worked as front end developer. I learn many under the hood of react and front end in this project. Many advanced front end concepts is used in this project",
      tags: ["React", "TypeScript", "Next.js", "Material UI", "Redux"],
      imageUrl: EmiImage,
    },
    {
      title: "Nike Landing Page",
      description:
        "This is a simple landing Page which i developed when I was learning next.js and tailwind CSS.",
      tags: ["React", "Next.js","Tailwind"],
      imageUrl: NikeLandingPage,
    },
    {
        title: "Whats app Clone",
        description:
          "This is a Full stack Chat Application Project developed from scratch. Mongodb is used as a database and socket.io is used for real time communication. It has real time message communication,private chats,group chats.",
        tags: ["React", "Mongodb", "Tailwind", "Redux Toolkit"],
        imageUrl: WhatsAppClone,
      },
  ] as const;
  
  export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Framer Motion",
  ] as const;

  export const linked_url = 'https://www.linkedin.com/in/utsav-neupane-8632a7148/'
  export const github_url = 'https://github.com/Utsavthebug'