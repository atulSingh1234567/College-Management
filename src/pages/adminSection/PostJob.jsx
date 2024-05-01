import React from 'react'

export default function PostJob() {
    
  return (
    <form className='flex items-center text-gray-500 flex-col gap-2 bg-gray-300 rounded-xl p-4'>
      <span className='flex flex-col gap-1'>
        <label htmlFor="position">Role<i className='text-red-500'>*</i></label>
        <input required name='position' type="text" placeholder='Enter the role' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="company">Company<i className='text-red-500'>*</i></label>
        <input required name='company' type="text" placeholder='Enter the role' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="Package">Package<i className='text-red-500'>*</i></label>
        <input required type="text" name='package' placeholder='Enter the role' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="description">About the company<i className='text-red-500'>*</i></label>
        <input required type="file" name='description' placeholder='Enter the role' className='border w-[400px] bg-white pt-1 h-[40px] rounded-xl px-4' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="googleForm">Apply here<i className='text-red-500'>*</i></label>
        <input type="text" required name='googleForm' placeholder='Enter URL' className='border w-[400px] bg-white pt-1 h-[40px] rounded-xl px-4 focus:outline-blue-400' />
      </span>
      
      <button type='submit' className='bg-blue-400 h-10 rounded-xl text-xl text-white font-semibold w-[400px] mt-4'>Post job</button>
    </form>
  )
}
