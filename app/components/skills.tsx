'use client';
import React from 'react'
import {motion} from 'framer-motion';
import SectionHeading from './section-heading';
import { skillsData } from '../lib/data';
import { useSectionInView } from '../lib/hooks';

const fadeInAnimationsVariants = {
    initial:{
        opacity:0,
        y:100
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.05*index
        }
    })
}

const Skills = () => {
    const {ref} = useSectionInView("Skills")
  return (
   <section
   ref={ref}
   id='skills'
   className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
   >
    <SectionHeading>My Skills</SectionHeading>
 
 <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
    {
        skillsData.map((skill,index)=>(
            <motion.li
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once:true
            }}
            custom={index}
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            {skill}
            </motion.li>
        ))
    }
 </ul>
   </section>
  )
}

export default Skills