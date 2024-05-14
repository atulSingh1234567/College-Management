import React, { useState } from 'react'
import axios from 'axios';

export default function PostJob() {
    const [file , setFile] = useState();
    const [postJob , setPostJob] = useState({

    })

    const handleFileChange = function(e){
      e.preventDefault();
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
    const handleChange = function(e){
      e.preventDefault();
      setPostJob({
        ...postJob,
        [e.target.name]:e.target.value
      })
    }
    console.log(postJob)

    const addingJobToDB = function(){
      console.log('inside job addition function')
      const formData = new FormData();
      formData.append('role' , postJob.role)
      formData.append('company' , postJob.company)
      formData.append('ctc' , postJob.ctc)
      formData.append('googleURL' , postJob.googleURL)
      formData.append('type' , 'description')
      formData.append('description' , file)
   
      axios.post('http://localhost:3000/api/v1/post-job',formData)
      .then(
        (res)=>{
          console.log(res)
        }
      )
      .catch(
        (err)=>{
          console.log(err)
        }
      )

    }
  return (
    <div className='flex items-center text-gray-500 flex-col gap-2 bg-gray-300 rounded-xl p-4'>
      <span className='flex flex-col gap-1'>
        <label htmlFor="role">Role<i className='text-red-500'>*</i></label>
        <input required name='role' value={postJob.role} onChange={handleChange} type="text" placeholder='Enter the role' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-slate-800' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="company">Company<i className='text-red-500'>*</i></label>
        <input required name='company' value={postJob.company} onChange={handleChange} type="text" placeholder='Enter the role' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-slate-800' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="ctc">Package<i className='text-red-500'>*</i></label>
        <input required type="text" name='ctc' value={postJob.ctc} onChange={handleChange} placeholder='Enter the role' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-slate-800' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="description">About the company<i className='text-red-500'>*</i></label>
        <input required type="file" name='description' accept='application/pdf' onChange={handleFileChange} className='border w-[400px] bg-white pt-1 h-[40px] rounded-xl px-4' />
      </span>
      <span className='flex flex-col gap-1'>
        <label htmlFor="googleURL">Apply here<i className='text-red-500'>*</i></label>
        <input type="text" required value={postJob.googleURL} onChange={handleChange} name='googleForm' placeholder='Enter URL' className='border w-[400px] bg-white pt-1 h-[40px] rounded-xl px-4 focus:outline-slate-800' />
      </span>
      <button onClick={addingJobToDB} className='bg-slate-800 h-10 rounded-xl text-xl text-white font-semibold w-[400px] mt-4'>Post job</button>
      
    </div>
  )
}
