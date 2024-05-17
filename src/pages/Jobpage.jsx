import React,{useEffect, useState} from 'react'
import JobCard from '../components/student-card/Card_Job.jsx'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useAllContexts } from '../contexts/Contexts.jsx';
export default function Job() {
     const {job,setJob} =useAllContexts();
     useEffect(
      ()=>{
        axios.get('http://localhost:3000/api/v1/show-jobs')
        .then(
          (res)=>{
            setJob(res.data.response)
          }
        )
      },[]
     )


     
  return (
    <div className='flex items-center min-h-[60vh] justify-center m-auto'>
      <Toaster
                position="top-center"
                reverseOrder={true}
            />
      <div className='w-100 flex flex-wrap justify-center my-10 gap-4 space-y-5'>
      {
        job.length > 0 ? job.map(function(job,index){
            return <JobCard key={index} descript={job}/>
        }) : <div className='flex flex-col items-center'>
        <img src="cogs.png" width="80" alt="cogs image" />
        <span className='text-gray-400 text-xl'>No Job Posted</span>
      </div>
      }
    </div>
    </div>
  )
}
