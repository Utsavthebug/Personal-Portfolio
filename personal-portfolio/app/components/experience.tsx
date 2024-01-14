'use client';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../context/theme-context';
import { useSectionInView } from '../lib/hooks';
import { experiencesData } from '../lib/data';

const Experience = () => {
    const {ref} = useSectionInView("Experience")
    const {theme} = useTheme()
  return (
    <section 
    ref={ref}
    className=' scroll-mt-28 mb-28 sm:mb-40'
    id='experience'>
    <VerticalTimeline lineColor="">
    {
        experiencesData.map((item,index)=>(
            <React.Fragment key={index}>
            <VerticalTimelineElement>


            </VerticalTimelineElement>
            </React.Fragment>
        ))
    }

    </VerticalTimeline>

    </section>
    )
}

export default Experience