import React, { useEffect, useState } from 'react'
import Card from '../components/student-card/Card.jsx'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useAllContexts } from '../contexts/Contexts.jsx';

export default function OurStarsPage() {
    const {student, setStudent} = useAllContexts()
    const [input , setInput] = useState("")

    
    const fetchStudents =  (input)=>{
         axios.get('http://localhost:3000/api/v1/show-students')
         .then(
          (res)=>{
            console.log(res.data.response)
            const results = res.data.response.filter(
              (student)=>{
                return input && student && student.name && student.name.toLowerCase().includes(input)
              }
            )

            console.log(results)
            setStudent(results)
          }
         )
      }

      const handleInputChange = (e)=>{
        const searchedString = e.target.value
        setInput(searchedString)
        fetchStudents(searchedString)
      }
    
  return (
    <div className='flex min-h-[60vh] flex-col w-full items-center'>
       <form className='mt-8'>
        <span className='flex items-center relative'>
            <input type="text" value={input} onChange={handleInputChange} placeholder='Search here..' className='border w-[500px] h-12 px-2 focus:outline-blue-500 rounded-xl'/>
            <SearchIcon className='absolute right-2'/>
        </span>
       </form>

      <span className='flex flex-wrap justify-center gap-2 px-4 my-8'>
        {
           student.length > 0 ? student.map(function(item){
                return <Card student={item} />
            }) : <div className='flex flex-col items-center'>
              <img src="cogs.png" width="80" alt="cogs image" />
              <span className='text-gray-400 text-xl'>No Student found</span>
            </div>
        }
        </span>
    </div>
  )
}
