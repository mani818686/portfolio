'use client'
import React, { useState } from 'react'
import { NavItems } from '@/constants'
import NavItem from './navItem'
import { MdOutlineLightMode } from "react-icons/md";
import Link from 'next/link';


function Navbar() {

  const [isDark, setIsDark] = useState(false)

  const toggleTheme = ()=>{
    setIsDark(!isDark)
  }

  return (
    <div className='h-15 border-b-2 border-bg-white flex p-4 justify-between shadow-sm'>
      <div className='hidden sm:block no-underline text-2xl'><Link href={"/"}>Manideep Alimi</Link></div>
      <div className="flex justify-between gap-5 md:gap-8">
        { NavItems.map((item: NavItemProps) => {
          return (
            <NavItem key={`nav-item-${item.id}`} {...item} />
            )
        })}
        <div>
          {/* <button onClick={toggleTheme}>
          <MdOutlineLightMode size={20} color={!isDark ? "black":"white"}/>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar