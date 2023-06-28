import React from 'react'
import { NavLink } from 'react-router-dom'

const NavSection = () => {
  return (
      <nav className='flex gap-4' >
        <NavLink className='py-1 px-2 border-zinc-950 shadow-cardBoxShadow border-[1.25px] lg:border-[1.35px] dark:border-zinc-200 shine' to={'/'}>Home</NavLink>
        <NavLink className='py-1 px-2 border-zinc-950 shadow-cardBoxShadow border-[1.25px] lg:border-[1.35px] dark:border-zinc-200 shine' to={'/projects'}>Projects</NavLink>
        <NavLink className='py-1 px-2 border-zinc-950 shadow-cardBoxShadow border-[1.25px] lg:border-[1.35px] dark:border-zinc-200 shine' to={'/about'}>About</NavLink>
      </nav>
  )
}

export default NavSection