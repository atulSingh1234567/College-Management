import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className='flex bg-gray-200 items-center p-8 rounded-xl flex-col gap-4'>
      <span className='relative w-[400px] flex items-center'>
        <input type="email" required pattern='[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' placeholder='Enter your email' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400'/>
        <EmailIcon className='absolute right-2 text-gray-400' />
      </span>
      <span className='relative w-[400px] flex items-center'>
        <input type={`${showPassword ? 'text' : 'password'}`} required pattern='[0-9]*' minLength={10} maxLength={10} placeholder='Your password' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400'/>
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
