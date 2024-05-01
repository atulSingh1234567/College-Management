import React from 'react'

export default function JobCard({descript}) {
  
  return (
    <div className='h-[300px] rounded-xl shadow-xl w-[350px] flex flex-col p-3 border'>
      <h1 className='text-xl text-blue-500 font-semibold'>{descript?.job}</h1>
      <p>{descript?.company}</p>
      <p className='bg-gray-200 px-2'>From CTE {descript?.package} a year</p>
      <h1 className='mt-2 font-semibold'>About the Company</h1>
      <p className='text-[13px] text-justify'>{descript?.description}</p>
      <a href={`${descript.goto}`} target='_blank' className='text-green-500 cursor-pointer font-semibold bg-gray-200 rounded-lg text-center h-8 py-1 mt-4'>Fill Form</a>
    </div>
  )
}
