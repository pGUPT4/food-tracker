import Link from 'next/link'
import React from 'react'

export const Navbar = ({text, href, active}) => {
  return (
    <div className='flex-1 flex flex-row bg-blue-500 text-white text-2xl font-mono font-bold'>
        <Link className = "m-5"href = "/">Food Tracker</Link>
        

        <nav className=' flex flex-row absolute top-0 right-0'>
            <Link className = "m-5 hover:underline" href= {"/"}>
                Today
            </Link>
            <Link className = "m-5 hover:underline" href= {"/routings/calander"}>Calandar</Link>
            <Link className = "m-5 hover:underline" href= {"/routings/profile"}>Profile - Later use logo instead of text</Link>                
        </nav>
        
    </div>
  )
}
