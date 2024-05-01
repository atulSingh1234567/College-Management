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
    ]
  return (
    <div className='flex flex-wrap justify-center my-8 gap-4'>
      {
        job.map(function(job){
            return <JobCard descript={job}/>
        })
      }
    </div>
  )
}
