import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';

export default function Footer() {
  return (
    <footer className='flex text-white justify-between p-8 mt-3 bg-slate-800 w-full'>
      <div className='flex flex-col gap-2 w-[40%]'>
         <i><img src="https://govexams.com/knit/recruitment/images/KNITlogo_png.png" alt="" 
          className='w-24 h-24'/>
          <p className='text-red-500'>Estd: 1979</p>
          <p>AKTU college code: 104</p>
          </i>

          <span className='flex gap-2'>
            <PlaceIcon className='text-rose-600 text-2xl'/>
            Sultanpur- Kadipur Road, Sultanpur, Uttar Pradesh 228118
          </span>

          <span className='flex gap-2'>
            <CallIcon className='text-rose-600 text-black'/>
            05362 240 454
          </span>

      </div>
      <div className='flex gap-2 text-lg flex-col w-[40%]'>
        <span>Kamla Nehru Institute of Technology, Sultanpur, UP</span>
        <span>For any query, please contact us at our official email: <a href='mailto: query@knit.ac.in' className='text-blue-500'>query@knit.ac.in</a></span>
      </div>
    </footer>
  )
}
