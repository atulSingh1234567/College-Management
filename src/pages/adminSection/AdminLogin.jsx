import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { useAllContexts } from '../../contexts/Contexts';
import { ProgressBar } from 'react-loader-spinner';
import {Toaster,toast} from 'react-hot-toast'

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [admin, setAdmin] = useState({});
  const { setMainAdmin, setAnyError } = useAllContexts();
  const [loading, setLoading] = useState(false)

  const setCookie = (name, value) => {
    let expires = "";
    // if (days) {
    //   const date = new Date();
    //   date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    //   expires = "; expires=" + date.toUTCString();
    // }
    document.cookie = name + "=" + (value || "")  + "; path=/";
  };
  
  const adminDetails = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value
    })
  }

  const sendAdminDetails = async function (e) {
  
      try {
        e.preventDefault()
        setLoading(true)
        axios.post('http://localhost:3000/api/v1/admin-login', admin)
          .then(
            (response) => {
              setCookie('accessToken', response.data.accessToken, 7);
              setCookie('refreshToken' , response.data.refreshToken)
              console.log(response)
              setMainAdmin(response.data)
              toast.success(response.data.message)
              setTimeout(
                ()=>{
                   location.href = '/'
                },1000
              )
              setLoading(false)
            }
          )
          .catch(
            (error) => {
              console.log(error)
              setLoading(false)
              toast.error(error.response.data.message)
              setAnyError(error.response);
            }
          )
      } catch (error) {
        console.log("error while fetching admin details");
        setAnyError(error)
      }
    }
    
  


  // console.log(admin)

  return (
    <form onSubmit={sendAdminDetails} method='POST' className='flex bg-gray-200 items-center p-8 rounded-xl flex-col gap-4'>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <span className='relative w-[400px] flex items-center'>
        <input value={admin.email} name='email' onChange={adminDetails} type="email" required pattern='[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' placeholder='Enter your email' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-slate-800' />
        <EmailIcon className='absolute right-2 text-gray-400' />
      </span>
      <span className='relative w-[400px] flex items-center'>
        <input type={`${showPassword ? 'text' : 'password'}`} onChange={adminDetails} name='password' value={admin.password} required minLength={10} placeholder='Your password' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-slate-800' />
        <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-2 text-gray-400 cursor-pointer'>
          {
            showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />
          }
        </span>
      </span>

      <span className='text-gray-400'>
        <ul style={{ listStyleType: 'disc' }}>
          <li>The admin panel is only for the professor in-charge of CDC.</li>
          <li>The email and password are pre-recorded.</li>
          <li>Use the recorded password and email only.</li>
        </ul>
      </span>

      <button type='submit' className='bg-slate-800 h-10 flex justify-center items-center rounded-xl text-xl text-white font-semibold w-[400px]'>{
        loading ? <span className=''> <ProgressBar
          visible={true}
          width="100"
          color="green"
          ariaLabel="infinity-spin-loading"
        /> </span> : 'Login'
      }</button>
    </form>
  )
}
