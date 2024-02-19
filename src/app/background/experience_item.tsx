import React from 'react'
import { FaBriefcase } from "react-icons/fa";


function ExperienceItem(props:ExperienceProps) {
    const Responsibilities = props.responsibilities
  return (
        <div className="details flex flex-col mb-5">
            <div className='flex gap-2'>
            <div className="icon pt-1"><FaBriefcase/></div>
                <p className='text-lg'>{props.Company}</p>
            </div>
            <p className='text-xs text-grey' >{props.Duration}</p>
            <div className='text-sm text-grey'>{props.Role}</div>
            <ul className='roles text-sm text-grey space-y-1 list-disc mt-2 pl-2'>
                {
                    Responsibilities && Responsibilities.map((activity,index)=>{
                        return(
                            <li key={`activity-${index}`}>{activity}</li>
                        )
                    })
                }
            </ul>
        </div>
  )
}

export default ExperienceItem