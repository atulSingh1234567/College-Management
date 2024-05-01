import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function AddAdminPage() {

  return (
    <form className='flex bg-gray-200 items-center p-8 rounded-xl flex-col gap-4'>
      <span className='relative w-[400px] flex items-center'>
        <input type="email" required pattern='[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' placeholder='Admin email' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400'/>
        <EmailIcon className='absolute right-2 text-gray-400' />
      </span>
      <span className='relative w-[400px] flex items-center'>
        <input type='text' required pattern='[0-9]*' minLength={10} maxLength={10} placeholder='Enter phone number' className='border w-[400px] h-[40px] rounded-xl px-4 focus:outline-blue-400'/>
        <LocalPhoneIcon className='absolute right-2 text-gray-400' />
      </span>

      <span className='text-gray-400'>
        <ul style={{listStyleType: 'disc'}}>
          <li>The admin panel is only for the professor in-charge of CDC.</li>
          <li>Only professor in-charge can add new admins.</li>
          <li>Only admin can use other features of the page.</li>
        </ul>
      </span>

      <button type='submit' className='bg-blue-400 h-10 rounded-xl text-xl text-white font-semibold w-[400px]'>add new admin</button>
    </form>
  )
}
