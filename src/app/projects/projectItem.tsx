import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";


function ProjectItem(props: ProjectItemProps) {
  return (
    <div className='border-2 border-emerald-50 w-80 h-100 md:w-80 md:h-100 border-solid p-3'>
      <Image src={props.image} width={350} height={100} alt={props.title} />
      <div className='flex flex-wrap justify-center gap-2'>
        <h1 className='text-center text-sky-500'>{props.title}</h1>
        <Link className='no-underline flex-right pt-1' href={props.link}><FaExternalLinkAlt /></Link>
      </div>
      
      <p className='mt-2 text-md'>{props.info}</p>
      <div className='flex flex-wrap	gap-1'>
        {props.skills.map((skill, index) => {
          return (<div key={`skill-${index}`} className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
            <div className="text-xs font-normal leading-none max-w-full flex-initial">{skill}</div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectItem