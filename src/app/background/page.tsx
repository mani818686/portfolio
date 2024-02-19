import React from 'react'
import {BackgroundDetails} from '@/utils/data'
import BackgroundExperienceItem from './experience_item'
import EducationItem from './education_item'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Background',
};

function Profile() {
  const Background = BackgroundDetails
  const experience = Background.Experience
  const education = Background.Education
  return (
    <div className={`block-container flex justify-center  flex-col`}>
      <div className="mx-20 work-experience mb-2">
         <h1 className='mt-10 text-4xl mb-10'>Work Experience</h1>
         {experience && experience.map((e,index)=>{
          return(
            <BackgroundExperienceItem  key={`experience-${index}`}{...e}/>
          )
         })}
      </div>
      <div className="mx-20 education">
        <h1 className='text-3xl'>Education</h1>
        {education && education.map((e,index)=>{
          return(
            <EducationItem  key={`education-${index}`}{...e}/>
          )
         })}
      </div>
    </div>
  )
}


export default Profile