import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { useAllContexts } from '../../contexts/Contexts';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [admin , setAdmin] = useState({});
  const {setMainAdmin,setAnyError} = useAllContexts();
  
  const adminDetails = (e)=>{
    const {name , value} = e.target;
       setAdmin({
        ...admin,
        [name]: value
       })
  }

  const sendAdminDetails = async function(e){
    try {
      e.preventDefault()
      axios.post('http://localhost:3000/api/v1/admin-login', admin)
      .then(
        (response)=>{
            console.log(response)
            setMainAdmin(response.data)
        }
      )
      .catch(
        (error)=>{
          console.log(error)
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
      <span className='relative w-[400px] flex items-center'>
        <input value={admin.email} name='email' onChange={adminDetails} type="email" required pattern='[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' placeholder='Enter your email' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400'/>
        <EmailIcon className='absolute right-2 text-gray-400' />
      </span>
      <span className='relative w-[400px] flex items-center'>
        <input type={`${showPassword ? 'text' : 'password'}`} onChange={adminDetails} name='password' value={admin.password} required pattern='[0-9]*' minLength={10} maxLength={10} placeholder='Your password' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400'/>
        <span onClick={()=>setShowPassword(prev => !prev)} className='absolute right-2 text-gray-400 cursor-pointer'>
          {
            showPassword? <RemoveRedEyeIcon  /> : <VisibilityOffIcon />
          }
        </span>
      </span>

      <span className='text-gray-400'>
        <ul style={{listStyleType: 'disc'}}>
          <li>The admin panel is only for the professor in-charge of CDC.</li>
          <li>The email and password are pre-recorded.</li>
          <li>Use the recorded password and email only.</li>
        </ul>
      </span>

      <button type='submit' className='bg-blue-400 h-10 rounded-xl text-xl text-white font-semibold w-[400px]'>login</button>
    </form>
  )
}
