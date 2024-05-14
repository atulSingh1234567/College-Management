import React from 'react'
import Card from '../components/student-card/Card.jsx'
import SearchIcon from '@mui/icons-material/Search';
export default function OurStarsPage() {
    const student = [
        {
          name: "Anchal Dev Singh",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_a2e255e38b7bdda9591b8dc301d68fb2_thumb.jpg",
          batch: "2018",
          course: "Btech",
          company: "HCL Tech",
          role: "SDE",
        },
        {
          name: "Akhil Gupta",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_2b57a904e47da695bd1c303d85fc974f_thumb.jpg",
          batch: "2010",
          course: "Btech",
          company: "Airtel",
          role: "SDE-2",
        },
        {
          name: "Sharman Joshi",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_0d37f24f11c2ce11c979f0b84610e6ab_thumb.jpg",
          batch: "2016",
          course: "Btech",
          company: "Juspay",
          role: "SDE-III",
        },
        {
          name: "Sunil Kumar Gupta",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_31260e886ba5b1a4b2c2c2d98e7452d4_thumb.jpeg",
          batch: "1993",
          course: "Btech",
          company: "TCS",
          role: "Network Engineer",
        },
        {
          name: "Ritesh Kr Singh",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_76f78b3c0486d722b730bd4ac4834cf0_thumb.jpg",
          batch: "2017",
          course: "Btech",
          company: "Accenture",
          role: "SDE",
        },
        {
          name: "Lalit Kumar",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_e136be0cf71ba3df2c0981ad782ee455_thumb.jpg",
          batch: "1997",
          course: "MCA",
          company: "Tech Mahindra",
          role: "Senior Data Scientist",
        },
        {
          name: "Anand Banerjee",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_2459eb12d3c5363722fbcd2a6b947dc0_thumb.jpg",
          batch: "1999",
          course: "B.tech",
          company: "Cisco",
          role: "System Engineer",
        },
        {
          name: "Abhishek Singh Kushwah",
          url: "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_fe67a554de02bcdc2aa060ff052e3c8f_thumb.jpeg",
          batch: "2022",
          course: "MCA",
          company: "Wipro",
          role: "Data Analyst",
        },
      ];
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
