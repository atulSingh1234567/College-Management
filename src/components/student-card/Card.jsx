import React from 'react'

export default function Card({student}) {
    
  return (
    <div className='flex shadow-xl relative flex-col text-black gap-4 bg-white justify-center w-[250px] border rounded-lg overflow-hidden'>
      <span className='h-[300px]'>
        <img src={student.url} alt="" className='w-full' />
      </span>
      <span className='flex absolute bottom-[-8px] bg-gray-300 w-full h-[100px] flex-col gap-1 text-lg my-2 px-4'>
      <p className='text-blue-600 opacity-100 font-semibold'>{student.name}</p>
      <p>{student.course}, {student.batch}</p>
      <p>{student.role},{student.company}</p>
      </span>
    </div>
  )
}
