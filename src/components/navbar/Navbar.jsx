import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useAllContexts } from '../../contexts/Contexts';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast'
export default function Navbar() {
  const [showBox, setShowBox] = useState(false)
  const [firstLetter, setFirstLetter] = useState("");
  const { setMainAdmin, imgURL, setimgURL, mainAdmin, getCookie, eraseCookie } = useAllContexts()

  useEffect(
    () => {
      const accessToken = getCookie('accessToken')
      axios.post('http://localhost:3000/api/v1/get-logged-admin', { accessToken })
        .then(
          (res) => {
            console.log(res)
            setMainAdmin(res.data.admin)
            setFirstLetter(res?.data?.admin?.email?.charAt(0).toUpperCase())
            setimgURL(res.data.admin.imgurl)
          }
        )
        .catch(
          (err) => {
            if (err.response || err.response.status === 401) {
              try {
                const refreshToken = getCookie('refreshToken');
                axios.get('http://localhost:3000/api/v1/generate-refresh-token', {
                  headers: {
                    'Authorization': `${refreshToken}`
                  }
                })
                  .then(
                    (res) => {
                      const accessToken = res.data.accessToken;
                      axios.post('http://localhost:3000/api/v1/get-logged-admin', { accessToken })
                        .then(
                          (res) => {
                            console.log(res)
                            setMainAdmin(res.data.admin)
                            setFirstLetter(res?.data?.admin?.email?.charAt(0).toUpperCase())
                            setimgURL(res.data.admin.imgurl)
                          }
                        )
                        .catch(
                          (err)=>{
                            toast.error(err.data.message)
                          }
                        )
                    }
                  )
              } catch (error) {
                      toast.error(error.data.message)
              }
            }
            else {
               toast.error(err.data.message)
            }
          }
        )
    }, []
  )
  console.log(firstLetter)
  console.log(mainAdmin)

  const logoutAccount = () => {
    eraseCookie('accessToken')
    eraseCookie('refreshToken')
    location.href = '/'
  }

  return (
    <header className='flex flex-col justify-between'>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <span>
        <img src="https://www.knit.ac.in/images/logo.png" alt="" className='px-4' />
      </span>

      <div className='flex bg-slate-800 p-4 justify-between w-[100%]'>
        <span className='flex items-center text-white gap-10'>
          <NavLink className={({ isActive }) => (`
            ${isActive ? 'text-xl font-bold' : 'text-xl'}`)} to=''>Home</NavLink>
          <NavLink className={({ isActive }) => (`
            ${isActive ? 'text-xl font-bold' : 'text-xl'}`)} to='https://alumni.knit.ac.in/'>Alumni</NavLink>
          <NavLink className={({ isActive }) => (`
            ${isActive ? 'text-xl font-bold' : 'text-xl'}`)} to='/jobs'>Jobs</NavLink>
          <NavLink className={({ isActive }) => (`
            ${isActive ? 'text-xl font-bold' : 'text-xl'}`)} to='/our-stars'>Our stars</NavLink>
          <NavLink className={({ isActive }) => (`
            ${isActive ? 'text-xl font-bold' : 'text-xl'}`)} to='/admin'>Admin</NavLink>
        </span>
        <span
          className='relative flex hover:bg-slate-500 cursor-pointer hover:text-black justify-center items-center border border-white text-white py-1 rounded-xl w-16'
          onClick={() => setShowBox(prev => !prev)}
        >
          {
            Object.keys(mainAdmin)?.length > 0 ? <span className='w-8 h-8 overflow-hidden bg-white text-black flex justify-center items-center font-bold rounded-full'>{

              <img src={imgURL} alt="error" />

            }</span>
              : <AccountCircleIcon className='min-w-8 min-h-8' />
          }
          <ArrowDropDownIcon />
          {
            showBox && <span className='absolute text-gray-500 gap-1 z-10 text-lg px-4 py-2 w-56 flex flex-col rounded-xl h-40 bg-white shadow-xl top-10 border right-0'>
              <p className='text-sm mb-2 text-blue-500'>Welcome, {mainAdmin.email}</p>
              <Link to='/settings/change-password' className='border rounded-xl px-3 hover:bg-gray-100'>Change Password</Link>
              <Link to='/settings/change-profile' className='border rounded-xl px-3 hover:bg-gray-100'>Change Profile</Link>
              <div onClick={logoutAccount} className='border rounded-xl px-3 hover:bg-gray-100'>Logout</div>
            </span>
          }
        </span>
      </div>

    </header>
  )
}
