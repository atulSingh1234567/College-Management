import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import {Toaster , toast} from 'react-hot-toast'
import axios from 'axios';
import { useAllContexts } from '../contexts/Contexts';

export default function Settingspage() {
    const {chosenSettings} = useParams();
    const [newpassword , setnewpassword] = useState({})
    const [file , setFile] = useState();
    const [prevImg , setPrevImg] = useState();
    const [loading , setLoading] = useState(false)
    const {getCookie, setimgURL} = useAllContexts()
    console.log(chosenSettings)
    const changePassword = ()=>{
        try {
          const accessToken = getCookie('accessToken')
          axios.post('http://localhost:3000/api/v1/change-password' , newpassword , {
            headers: {
              'Authorization' : `${accessToken}`
            }
          } )
          .then(
            (res)=>{
              toast.success(res.data.message)
              console.log(res)
            }
          )
        } catch (error) {
          console.log(error)
           toast.error("Error while posting")
        }
      }

      const setProfileImg = function(){
        try {
            setLoading(true);
            const accessToken = getCookie('accessToken')
            const formData = new FormData();
            formData.append('type' , 'url')
            formData.append('url' , file)

            axios.post('http://localhost:3000/api/v1/change-profile' , formData , {
                headers: {
                    'Authorization' : `${accessToken}`,
                    'Content-Type' : 'multipart/form-data'
                }
            })
            .then(
                (res)=>{
                    setLoading(false)
                    setimgURL(res.data.profilePhotoURL)
                    toast.success(res.data.message)
                }
            )
        } catch (error) {
              console.log(error)
              setLoading(false)
              toast.error(error.data.message)
        }
      }

      const handleInput = (e)=>{
        e.preventDefault();
        const {name , value} = e.target
        setnewpassword({
          [name] : value
      })
      }

      const handleFileChange = (e)=>{
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        const imgURI = URL.createObjectURL(selectedFile)
        setPrevImg(imgURI)
      }
  return (
    <div className='flex items-center justify-center h-[400px]'>
      { 
        chosenSettings === 'change-password' ? <span className='border rounded-xl shadow-xl gap-2 p-4 py-5 h-[200px] z-10 flex flex-col bg-white'>
          <label htmlFor="newpassword">Enter new password</label>
          <input type="text" required value={newpassword.newpassword} onChange={handleInput} pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}' className='border w-[400px] border rounded-xl px-2 h-10 bg-white pt-1' placeholder='enter new password..' name='newpassword'  />

          <button onClick={changePassword} className='bg-slate-800 flex h-10 justify-center items-center rounded-xl text-xl text-white font-semibold w-[400px] mt-4'>Change password</button>
        </span> : <span className='border rounded-xl shadow-xl gap-2 p-4 py-5 h-fit z-10 flex flex-col left-1/2 top-[300px] bg-white'>
          <label htmlFor="newpassword">Change profile photo</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className='border w-[400px] border rounded-xl px-2 h-10 bg-white pt-1' placeholder='enter new password..' name='newpassword'  />
            
          <button onClick={setProfileImg} className='bg-slate-800 flex h-10 justify-center items-center rounded-xl text-xl text-white font-semibold w-[400px] mt-4'>{ loading ? 'Processing...' : 'Change profile'}</button>
          <span className='w-44 border border-[12px] h-44 rounded-full mt-4 overflow-hidden'>
          <img src={prevImg} className='w-full h-full' alt='image preview' />
          </span>
          
        </span>
        }
    </div>
  )
}
