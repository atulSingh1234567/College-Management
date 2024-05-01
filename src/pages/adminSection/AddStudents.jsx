import React from 'react'

export default function AddStudents() {
    return (
        <form className='flex bg-gray-300 px-28 py-8 text-gray-500 rounded-xl text-lg flex-col'>
            <label htmlFor="student">Student's name<i className='text-red-500'>*</i></label>
            <input type="text" className='border w-[400px] border rounded-xl px-2 h-10' name='student' placeholder='Fill the name' />
            <label htmlFor="rollno">Roll number<i className='text-red-500'>*</i></label>
            <input type="text" className='border w-[400px] border rounded-xl px-2 h-10' name='rollno' placeholder='roll number' />
            <span className='my-4 flex gap-3'>
                <span className='flex gap-2'>
                    <label htmlFor="course">Course<i className='text-red-500'>*</i></label>
                    <select name="course" className='rounded-xl w-28 focus:outline-none'>
                        <option value="BTech">BTech</option>
                        <option value="MCA">MCA</option>
                        <option value="MTech">MTech</option>
                    </select>
                </span>
                <span className='flex gap-2'>
                    <label htmlFor="batch">Batch<i className='text-red-500'>*</i></label>
                    <input type="number" min={2000} max={3000} name="batch" className='rounded-xl px-2 w-36 focus:outline-none'/>
                </span>
                <span>

                </span>
            </span>
            <label htmlFor="company">Placed in<i className='text-red-500'>*</i></label>
            <input type="text" className='border w-[400px] border rounded-xl px-2 h-10' name='company' placeholder='Placed in' />
            <label htmlFor="email">Email<i className='text-red-500'>*</i></label>
            <input type="text" className='border w-[400px] border rounded-xl px-2 h-10' name='email' placeholder='email...' />
    
            <label htmlFor="package">CTC<i className='text-red-500'>*</i></label>
            <input type="number" className='border w-[400px] border rounded-xl px-2 h-10' name='email' placeholder='' />
            

            <button type='submit' className='bg-blue-400 h-10 rounded-xl text-xl text-white font-semibold w-[400px] mt-4'>Add student</button>
        </form>
    )
}
