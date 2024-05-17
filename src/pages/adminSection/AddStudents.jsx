import React, { useState } from 'react'
import axios from 'axios'
import {Toaster,toast} from 'react-hot-toast'
import { ProgressBar } from 'react-loader-spinner';
import { useAllContexts } from '../../contexts/Contexts';

export default function AddStudents() {
    const [student, setStudent] = useState({
        name: '',
        course: 'BTech',
        rollno: 22222,
        role: '',
        batch: 2024,
        ctc: ''
    });
    const [loading,setLoading] = useState(false)
    const [studentImg, setStudentImg] = useState();
    const [prevImg, setPrevImg] = useState();
    const {getCookie} = useAllContexts()

    const handleFileChange = function (e) {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        setStudentImg(selectedFile)
        const prev = URL.createObjectURL(selectedFile)
        setPrevImg(prev);
    }

    const addingStudent = function (e) {
        e.preventDefault();
        const { name, value } = e.target
        setStudent({
            ...student,
            [name]: value
        })
    }

    console.log(student)

    const postStudent = async () => {
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append('name', student.name)
            formData.append('role', student.role)
            formData.append('batch', student.batch)
            formData.append('course', student.course)
            formData.append('company', student.company)
            formData.append('ctc', student.ctc)
            formData.append('rollno', student.rollno)
            formData.append('type', 'url')
            formData.append('url', studentImg)
            console.log("formdata",formData)
            const accessToken = getCookie('accessToken')
            axios.post('http://localhost:3000/api/v1/add-student', formData, {
                headers: {
                  'Authorization': `${accessToken}`,
                  'Content-Type': 'multipart/form-data'
                }
              })
                .then(
                    (res) => {
                        console.log(res)
                        setLoading(false)
                        toast.success(res.data.message)
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        setLoading(false)
                        toast.error("Error while adding student")
                    }
                )
        } catch (error) {
            console.log(error + "couldnt connect to the server")
        }
    }

    return (
        <div className='bg-gray-300 px-28 py-8 rounded-xl text-gray-500 text-lg'>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            <span className='my-4 flex flex-col gap-3'>
                <label htmlFor="url">Upload photo</label>
                <input type="file" name='url' id='url' accept='image/*' onChange={handleFileChange} className='border w-[400px] border rounded-xl px-2 h-10 bg-white pt-1' />
            </span>
            <div className='w-36 rounded-xl overflow-hidden min-h-32 bg-white'>
                <img src={prevImg} alt="student profile" />
            </div>

            <form className='flex flex-col' encType="multipart/form-data">
                <label htmlFor="name">Student's name<i className='text-red-500'>*</i></label>
                <input value={student.name} onChange={addingStudent} type="text" className='border w-[400px] border rounded-xl px-2 h-10' name='name' placeholder='Fill the name' />
                <label htmlFor="rollno">Roll number<i className='text-red-500'>*</i></label>
                <input type="text" onChange={addingStudent} value={student.rollno} className='border w-[400px] border rounded-xl px-2 h-10' name='rollno' placeholder='roll number' />
                <span className='my-4 flex gap-3'>
                    <span className='flex gap-2'>
                        <label htmlFor="course">Course<i className='text-red-500'>*</i></label>
                        <select onChange={addingStudent} value={student.course} name="course" className='rounded-xl w-28 focus:outline-none'>
                            <option value="BTech" defaultValue>BTech</option>
                            <option value="MCA">MCA</option>
                            <option value="MTech">MTech</option>
                        </select>
                    </span>
                    <span className='flex gap-2'>
                        <label htmlFor="batch">Batch<i className='text-red-500'>*</i></label>
                        <input type="number" onChange={addingStudent} value={student.batch} min={2000} max={3000} name="batch" className='rounded-xl px-2 w-36 focus:outline-none' />
                    </span>
                    <span>

                    </span>
                </span>
                <label htmlFor="company">Placed in<i className='text-red-500'>*</i></label>
                <input type="text" value={student.company} onChange={addingStudent} className='border w-[400px] border rounded-xl px-2 h-10' name='company' placeholder='Placed in' />
                <label htmlFor="role">role<i className='text-red-500'>*</i></label>
                <input type="text" value={student.role} onChange={addingStudent} className='border w-[400px] border rounded-xl px-2 h-10' name='role' placeholder='role' />
                <label htmlFor="email">Email<i className='text-red-500'>*</i></label>
                <input type="text" value={student.email} onChange={addingStudent} className='border w-[400px] border rounded-xl px-2 h-10' name='email' placeholder='email...' />

                <label htmlFor="ctc">CTC<i className='text-red-500'>*</i></label>
                <input type="text" value={student.ctc} onChange={addingStudent} name='ctc' className='border w-[400px] border rounded-xl px-2 h-10' placeholder='' />

            </form>
            <button onClick={postStudent} className='bg-slate-800 flex h-10 justify-center items-center rounded-xl text-xl text-white font-semibold w-[400px] mt-4'>
                {
                    loading ? <span className=''> <ProgressBar
                    visible={true}
                    width="100"
                    color="green"
                    ariaLabel="infinity-spin-loading"
                    /> </span> : 'Add Student'
                }
            </button>



        </div>
    )
}
