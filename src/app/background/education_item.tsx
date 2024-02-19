import React from 'react'
import { FaUniversity } from "react-icons/fa";



function EducationItem(props:EducationProps) {
  return (
        <div className="details flex flex-col mb-5">
            <div className='flex gap-2'>
            <div className="icon pt-1"><FaUniversity/></div>
                <p className='text-lg'>{props.level}</p>
            </div>
            <div className='text-sm font-[epilogue] text-grey'>{props.College}</div>
            <p className='text-sm font-[epilogue] text-grey' >{props.Duration}</p>
        </div>
  )
}

export default EducationItem