import Link from 'next/link'
import React from 'react'


function NavItem(props:NavItemProps) {
  return (
    <div className='no-underline'>
        <Link href={props.link}>{props.label}</Link>
    </div>
  )
}

export default NavItem