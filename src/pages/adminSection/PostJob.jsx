import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Toaster,toast} from 'react-hot-toast'
import {ProgressBar} from 'react-loader-spinner';
import { useAllContexts } from '../../contexts/Contexts';

export default function PostJob() {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false)
  const [postJob, setPostJob] = useState({

  })
  const {getCookie} = useAllContexts()

  const handleFileChange = function (e) {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }
  const handleChange = function (e) {
    e.preventDefault();
    setPostJob({
      ...postJob,
      [e.target.name]: e.target.value
    })
  }
  console.log(postJob)

  const addingJobToDB = function () {
    console.log('inside job addition function')
    setLoading(true)
    const formData = new FormData();
    formData.append('role', postJob.role)
    formData.append('company', postJob.company)
    formData.append('ctc', postJob.ctc)
    formData.append('googleURL', postJob.googleURL)
    formData.append('type', 'description')
    formData.append('description', file)

    const accessToken = getCookie('accessToken')
    axios.post('http://localhost:3000/api/v1/post-job', formData , {
      headers: {
        'Authorization': `${accessToken}`,
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(
        (res) => {
          console.log(res)
          setLoading(false)
          toast.success(res.data.message)
        }
      )
      .catch(
        (err) => {
          console.log(err)
          setLoading(false)
          toast.error('Error while posting the job')
        }
      )

  }

  return (
    <div className='flex items-center text-gray-500 flex-col gap-2 bg-gray-300 rounded-xl p-4'>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
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
        <input type="text" required value={postJob.googleURL} onChange={handleChange} name='googleURL' placeholder='Enter URL' className='border w-[400px] bg-white pt-1 h-[40px] rounded-xl px-4 focus:outline-slate-800' />
      </span>
      <button onClick={addingJobToDB} className='bg-slate-800 flex justify-center items-center h-10 rounded-xl text-xl text-white font-semibold w-[400px] mt-4'>
        {
          loading ? <span className=''> <ProgressBar
          visible={true}
          width="100"
          color="green"
          ariaLabel="infinity-spin-loading"
          /> </span> : 'Post Job'
        }
      </button>

    </div>
  )
}
