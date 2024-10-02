import { about } from '@/utils/data';
import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { IoLocation, IoMailOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: 'About',
};


function About() {
  return (
    <div className='block-container'>
      <div className='top-section mt-10 flex flex-col justify-center items-center'>
      {/* <Image className="rounded-full" src={about.profile} alt={"Profile"} width={200} height={120}/> */}
      <div className="title text-2xl font-semibold mt-2"><h1>Manideep Alimi</h1></div>
      <div className="info text-base mx-10 md:mx-4 text-grey">Graduate Student in CS </div>
      <div className="info mx-10 md:mx-4 text-grey">University of Central Missouri </div>
      <div className="info mx-10 md:mx-4 text-grey flex"><IoLocation size={20} className='pt-1'/> Overland Park, Kansas </div>
      <div className="icons flex flex-wrap gap-6 mt-3 mb-3">
      <Link target="_blank"  className="no-underline" href={`mailto:${about.email}`}><IoMailOutline size={25}/></Link>
      <Link target="_blank" className="no-underline" href={about.github}><FaGithub size={25}/></Link>
      <Link target="_blank"  className="no-underline" href={about.linkedin}><FaLinkedin size={25}/></Link>
      <Link target="_blank"  className="no-underline" href={`tel:${about.phone}`}><FaPhone size={25}/></Link>
      </div>
      <div className='flex mt-2 mb-3'>
      <Link className="bg-white border border-gray-300 text-grey focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" href={"/background"}> <button type="button" className=" ">Experience</button></Link>
        <Link target="_blank"  className="bg-white border border-gray-300 text-grey focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" href={about.resume}> <button type="button" className=" ">Resume</button></Link>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      {about.info.map((text,index)=>{
        return(
          <div key={`text-${index}`} className='mx-50 text-grey text-base'>{text}</div>
        )
      })}
     
      </div>
     
    </div>
  )
}

export default About