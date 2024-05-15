import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Toaster,toast} from 'react-hot-toast'
import { ProgressBar } from 'react-loader-spinner';
import axios from 'axios';
import { useAllContexts } from '../../contexts/Contexts';

export default function AddAdminPage() {
  const [loading, setLoading] = useState(false)
  const {getCookie} = useAllContexts();
  const [newadmin,setnewadmin] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = function(e){
    e.preventDefault();
    setnewadmin({
      ...newadmin,
      [e.target.name]:e.target.value
    })
  }
 
  
  const addNewAdmins = function(){
    try {
      setLoading(true)
      const accessToken = getCookie('accessToken');
      console.log(accessToken)
      axios.post('http://localhost:3000/api/v1/add-admin', {newadmin}, {
        headers : {
          'Authorization' : `${accessToken}`,
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then(
        (res)=>{
          setLoading(false)
          toast.success(res.data.message)
        }
      )
    } catch (error) {
      setLoading(false)
      toast.error("New admin not added")
    }
  }
  return (
    <form onSubmit={addNewAdmins} className='flex bg-gray-200 items-center p-8 rounded-xl flex-col gap-4'>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <span className='relative w-[400px] flex items-center'>
        <input type="email" name='email' value={newadmin.email} onChange={handleInputChange} required pattern='[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' placeholder='Admin email' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-slate-800' />
        <EmailIcon className='absolute right-2 text-gray-400' />
      </span>
      <span className='relative w-[400px] flex items-center'>
        <input type='text' name='password' value={newadmin.password} onChange={handleInputChange} required pattern='[0-9]*' minLength={10} maxLength={10} placeholder='Enter phone number' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-slate-800' />
        <LocalPhoneIcon className='absolute right-2 text-gray-400' />
      </span>

      <span className='text-gray-400'>
        <ul style={{ listStyleType: 'disc' }}>
          <li>The admin panel is only for the professor in-charge of CDC.</li>
          <li>Only professor in-charge can add new admins.</li>
          <li>Only admin can use other features of the page.</li>
        </ul>
      </span>

      <button type='submit' className='bg-slate-800 flex h-10 justify-center items-center rounded-xl text-xl text-white font-semibold w-[400px]'>
        {
          loading ? <span className=''> <ProgressBar
            visible={true}
            width="100"
            color="green"
            ariaLabel="infinity-spin-loading"
          /> </span> : 'add new admin'
        }
      </button>
    </form>
  )
}


