import Image from "next/image";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { about } from "@/utils/data";
import { IoMdEye } from "react-icons/io";



export default function Home() {
  return (
    <div className="px-4 home-container w-full flex justify-center items-center flex-col gap-4">
      {/* <Image className="rounded-full" src={about.profile} alt={"Profile"} width={200} height={120} /> */}
      <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Manideep Alimi</span></h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Graduate in CS | Full Stack Developer</p>
      <div className="icons flex flex-wrap gap-6">
        <Link target="_blank"  className="no-underline" href={`mailto:${about.email}`}><IoMailOutline size={25} /></Link>
        <Link target="_blank" className="no-underline" href={about.github}><FaGithub size={25} /></Link>
        <Link target="_blank"  className="no-underline" href={about.linkedin}><FaLinkedin size={25} /></Link>
      </div>
      <Link href={"/about"} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        See more  about me
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
      <Link  target="_blank" className="flex gap-2 text-white bg-blue-700 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" href={about.resume}> 
      <button type="button" className=" ">Resume</button>
      <IoMdEye size={20}/>
      </Link>
    </div>
  );
}