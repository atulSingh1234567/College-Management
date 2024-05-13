import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='flex flex-col justify-between'>
      <span>
        <img src="https://www.knit.ac.in/images/logo.png" alt="" className='px-4' />
      </span>
      <span className='flex p-4 bg-blue-500 gap-10'>
        <NavLink className={({isActive})=>(`
            ${isActive? 'text-xl font-bold': 'text-xl'}`)} to=''>Home</NavLink>
        <NavLink className={({isActive})=>(`
            ${isActive? 'text-xl font-bold': 'text-xl'}`)} to='https://alumni.knit.ac.in/'>Alumni</NavLink>
        <NavLink className={({isActive})=>(`
            ${isActive? 'text-xl font-bold': 'text-xl'}`)} to='/jobs'>Jobs</NavLink>
        <NavLink className={({isActive})=>(`
            ${isActive? 'text-xl font-bold': 'text-xl'}`)} to='/our-stars'>Our stars</NavLink>
        <NavLink className={({isActive})=>(`
            ${isActive? 'text-xl font-bold': 'text-xl'}`)} to='/admin'>Admin</NavLink>
      </span>
      <span>
        
      </span>
    </header>
  )
}
