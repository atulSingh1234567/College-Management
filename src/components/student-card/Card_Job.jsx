import React from 'react'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast} from 'react-hot-toast'
import axios from 'axios';
import { useAllContexts } from '../../contexts/Contexts';
import {useNavigate} from 'react-router-dom'
export default function JobCard({descript}) {
  const navigate = useNavigate()
     const {getCookie} = useAllContexts()
    const deleteJob = ()=>{
      try {
        
        const accessToken = getCookie('accessToken')

        axios.post('http://localhost:3000/api/v1/delete-job' , descript , {
          headers: {
            'Authorization' : `${accessToken}`
          }
        })
        .then(
          (res)=>{
            toast.success(res.data.message)
            location.href = '/jobs'
          }
        )
      } catch (error) {
         toast.error('error while deleting the job, try again')
      }
    }
  return (
    <div className='h-[300px] rounded-xl relative shadow-xl w-[350px] flex gap-1 flex-col p-3 border'>
      <span onClick={()=>deleteJob(descript._id)} className='absolute cursor-pointer right-4 top-4'><DeleteIcon/></span>
      <h1 className='text-xl text-sky-900 font-semibold'>{descript?.role}</h1>
      <p>{descript?.company}</p>
      <p className='bg-gray-200 px-2'>From <span className='text-blue-500'>{descript?.ctc}</span>  a year</p>
      <h1 className='mt-2 font-semibold'></h1>
      <a href={descript?.description} target='_blank' className='text-[13px] font-semibold border rounded-xl mt-4 h-8 pt-1 hover:bg-gray-200 text-center'> <span className='text-red-600 pr-1'><PictureAsPdfIcon/></span>Job Description</a>
      <a href={`${descript.googleURL}`} target='_blank' className='text-white cursor-pointer font-semibold bg-slate-800 rounded-lg text-center h-8 py-1 mt-4'>Fill Form</a>
    </div>
  )
}
