import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function AdminPage() {
  const feature = ['Post a Job', "Add Student", "Admin login", "Add admin"];
  return (
    <div className='flex p-4 mt-4 min-h-[400px] gap-4 justify-center'>
      <span className='w-[40%] h-fit bg-gray-200 py-8 px-4 rounded-xl'>
         <ul className='flex flex-col gap-2'>
          {
            feature.map(function(item){
              return <NavLink to={`/admin/${item.toLowerCase().replaceAll(" " , "-")}`} className={({isActive})=>(`${isActive
                      ? 'font-bold bg-slate-800 text-white' : 'text-slate-800'} bg-gray-300 px-3 py-1 rounded-xl text-2xl w-[100%]`)}>{item}</NavLink>
            })
          }
         </ul>
      </span>
      <span className='w-[50%]'>
         <Outlet />
      </span>
    </div>
  )
}
