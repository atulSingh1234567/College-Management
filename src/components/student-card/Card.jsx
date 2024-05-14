import React from 'react'

export default function Card({student}) {
    
  return (
    <div className='flex flex-col gap-4 bg-red-400 w-[250px] border rounded-lg overflow-hidden'>
      <span className='h-[140px] overflow-hidden'>
        <img src={student.url} alt="" />
      </span>
      <span className='flex flex-col gap-1 text-lg my-2 px-4'>
      <p className='text-blue-600 font-semibold'>{student.name}</p>
      <p>{student.course}, {student.batch}</p>
      <p>{student.role},{student.company}</p>
      </span>
    </div>
  )
}
