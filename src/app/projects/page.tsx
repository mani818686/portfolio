import React from 'react'
import ProjectItem from './projectItem'
import { projects } from '@/utils/data'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

function Projects() {
  return (
    <div className='mx-8 mt-15'>
      <h1 className='mt-10 mb-5 text-4xl mb-10'>Featured Projects</h1>
      <div className="flex space-between gap-4 align-center flex-col md:flex-row flex-wrap project-container">
      {
        projects.map((project,index)=>{
          return(
            <ProjectItem key={`project-${index}`}{...project}/>
          )
        })
      }
      </div>
    
    </div>
  )
}

export default Projects