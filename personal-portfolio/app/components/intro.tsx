'use client';
import React from 'react'
import Image from 'next/image'
import ProfileImage from '@/public/projectImage/Profile.jpg'
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa';
import { github_url, linked_url } from '../lib/data';

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
       <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2
                }}
                >
                <Image
                src={ProfileImage}
                alt='Profile Picture'
                quality={95}
                priority={true}
                className='h-24 w-24 object-cover rounded-full border-[0.25rem] border-white shadow-xl'
                />
                </motion.div>
                <motion.span 
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:'spring',
                    stiffness:125,
                    delay:0.1,
                    duration:0.7
                }}
                className='absolute bottom-0 right-0 text-4xl'>
                    👋
                </motion.span>
            </div>
        </div> 

        <motion.p 
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]'>
        <span className="font-bold">Hello, I'm Utsab.</span> I'm a{" "}
        <span className="font-bold">full-stack developer Javascript</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
        </motion.p>

        <motion.div 
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'>
            <Link className='bg-gray-900 text-white group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
            active:scale-105 hover:bg-gray-950 transition' href={"#contact"}> Contact me here <BsArrowRight className="group-hover:translate-x-1 opacity-70"/> </Link>

            <a href='/UtsabCV.pdf' className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
            transition cursor-pointer
            ' download> Download CV <HiDownload className="group-hover:translate-y-1 transition opacity-60"/></a>

            <a target='_blank' href={linked_url} className=" bg-white p-4 flex items-center gap-2 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack">
                <BsLinkedin/>
            </a>

            <a target='_blank' href={github_url} className="bg-white p-4 flex items-center gap-2 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack">
                <FaGithub/>
            </a>
        </motion.div>
    </section>
  )
}

export default Intro