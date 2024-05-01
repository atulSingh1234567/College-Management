import React from 'react'
import Card from '../components/student-card/Card.jsx'
import SearchIcon from '@mui/icons-material/Search';
export default function OurStarsPage() {
    const student = [
        {
            name: 'Sharman Joshi',
            url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Raju_Srivastav-231018-108-phot_1200x768.jpeg?VersionId=yKvF4V07YkyTox8.eFPYy0e_vQ8MpoZQ&size=690:388',
            batch: '2024',
            course: 'Btech',
            company: 'Raju Pan Bhandar, pvt. lmt.',
            role: 'SDE'
        },
        {
            name: 'Sharman Joshi',
            url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Raju_Srivastav-231018-108-phot_1200x768.jpeg?VersionId=yKvF4V07YkyTox8.eFPYy0e_vQ8MpoZQ&size=690:388',
            batch: '2024',
            course: 'Btech',
            company: 'Raju Pan Bhandar, pvt. lmt.',
            role: 'SDE'
        },
        {
            name: 'Sharman Joshi',
            url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Raju_Srivastav-231018-108-phot_1200x768.jpeg?VersionId=yKvF4V07YkyTox8.eFPYy0e_vQ8MpoZQ&size=690:388',
            batch: '2024',
            course: 'Btech',
            company: 'Raju Pan Bhandar, pvt. lmt.',
            role: 'SDE'
        },
        {
            name: 'Sharman Joshi',
            url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Raju_Srivastav-231018-108-phot_1200x768.jpeg?VersionId=yKvF4V07YkyTox8.eFPYy0e_vQ8MpoZQ&size=690:388',
            batch: '2024',
            course: 'Btech',
            company: 'Raju Pan Bhandar, pvt. lmt.',
            role: 'SDE'
        },
        {
            name: 'Sharman Joshi',
            url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Raju_Srivastav-231018-108-phot_1200x768.jpeg?VersionId=yKvF4V07YkyTox8.eFPYy0e_vQ8MpoZQ&size=690:388',
            batch: '2024',
            course: 'Btech',
            company: 'Raju Pan Bhandar, pvt. lmt.',
            role: 'SDE'
        },
        {
            name: 'Sharman Joshi',
            url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Raju_Srivastav-231018-108-phot_1200x768.jpeg?VersionId=yKvF4V07YkyTox8.eFPYy0e_vQ8MpoZQ&size=690:388',
            batch: '2024',
            course: 'Btech',
            company: 'Raju Pan Bhandar, pvt. lmt.',
            role: 'SDE'
        },
    ]
  return (
    <div className='flex flex-col w-full items-center'>
       <form className='mt-8'>
        <span className='flex items-center relative'>
            <input type="text" placeholder='Search here..' className='border w-[500px] h-12 px-2 focus:outline-blue-500 rounded-xl'/>
            <SearchIcon className='absolute right-2'/>
        </span>
       </form>

      <span className='flex flex-wrap gap-2 px-4 my-8'>
        {
            student.map(function(item){
                return <Card student={item} />
            })
        }
        </span>
    </div>
  )
}
