'use client';
import React from 'react'
import {motion} from 'framer-motion'
import SectionHeading from './section-heading';

const About = () => {
  return (
   <motion.section 
   initial={{opacity:0,y:100}}
   animate={{opacity:1,y:0}}
   transition={{delay:0.175}}
   id="about"
   className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'>
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">BSC.CSIT(Computer Science and Infromation Technology).</span> 
         I Joined <span className='font-bold'>Web experts Nepal</span> as a  {" "}
        <span className="font-medium">React Developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Best practices in Software Development</span>
      </p>
   </motion.section>
  )
}

export default About