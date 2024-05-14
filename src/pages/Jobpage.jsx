import React from 'react'
import JobCard from '../components/student-card/Card_Job.jsx'
export default function Job() {
    const job = [
        {
            job: 'React JS Developer',
            company: 'AlgoSwing',
            package: '3,50,000',
            description: `ShortHills AI is an end-to-end Generative AI and Data Engineering Solution Provider. Based
            out of ShortHills (NJ, USA) and New Delhi (India) we build Generative AI tools and products for
            enterprises. We work closely with our clients from Data Pre-processing to Data Pipelines in
            Data Lakes to Machine Learning and AI. `
            ,
            goto: 'https://www.google.com/'
        },
        {
            job: 'Python Developer',
            company: 'Juspay',
            package: 'upto 10lpa',
            description: `ShortHills AI is an end-to-end Generative AI and Data Engineering Solution Provider. Based
            out of ShortHills (NJ, USA) and New Delhi (India) we build Generative AI tools and products for
            enterprises. We work closely with our clients from Data Pre-processing to Data Pipelines in
            Data Lakes to Machine Learning and AI. `
            ,
            goto: 'https://www.google.com/'
        },
        {
            job: 'Associate Software Engineer',
            company: 'Edge Technology',
            package: '3,50,000',
            description: `ShortHills AI is an end-to-end Generative AI and Data Engineering Solution Provider. Based
            out of ShortHills (NJ, USA) and New Delhi (India) we build Generative AI tools and products for
            enterprises. We work closely with our clients from Data Pre-processing to Data Pipelines in
            Data Lakes to Machine Learning and AI. `
            ,
            goto: 'https://www.google.com/'
        },
        {
            job: 'Android Developer',
            company: 'AlgoSwing',
            package: '3,50,000',
            description: `ShortHills AI is an end-to-end Generative AI and Data Engineering Solution Provider. Based
            out of ShortHills (NJ, USA) and New Delhi (India) we build Generative AI tools and products for
            enterprises. We work closely with our clients from Data Pre-processing to Data Pipelines in
            Data Lakes to Machine Learning and AI. `
            ,
            goto: 'https://www.google.com/'
        },
        {
          job: 'QA Testing',
          company: 'AlgoSwing',
          package: '3,50,000',
          description: `ShortHills AI is an end-to-end Generative AI and Data Engineering Solution Provider. Based
          out of ShortHills (NJ, USA) and New Delhi (India) we build Generative AI tools and products for
          enterprises. We work closely with our clients from Data Pre-processing to Data Pipelines in
          Data Lakes to Machine Learning and AI. `
          ,
          goto: 'https://www.google.com/'
      },
      {
        job: 'Frontend Developer',
        company: 'CodeMonk',
        package: '3,50,000',
        description: `ShortHills AI is an end-to-end Generative AI and Data Engineering Solution Provider. Based
        out of ShortHills (NJ, USA) and New Delhi (India) we build Generative AI tools and products for
        enterprises. We work closely with our clients from Data Pre-processing to Data Pipelines in
        Data Lakes to Machine Learning and AI. `
        ,
        goto: 'https://www.google.com/'
    },
    ]
  return (
    <div className='flex items-center justify-center m-auto'>
      <div className='w-100 flex flex-wrap justify-center my-10 gap-4 space-y-5'>
      {
        job.map(function(job){
            return <JobCard descript={job}/>
        })
      }
    </div>
    </div>
  )
}
