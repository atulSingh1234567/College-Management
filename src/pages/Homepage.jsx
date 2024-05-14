import React from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/student-card/Card";

export default function Homepage() {
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

  const partners = [
    "https://www.knit.ac.in/recruiters/recruiting-1.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-2.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-3.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-4.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-5.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-6.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-7.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-8.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-9.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-10.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-11.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-12.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-13.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-14.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-15.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-16.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-17.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-18.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-19.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-20.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-21.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-22.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-23.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-24.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-25.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-26.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-27.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-28.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-29.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-30.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-31.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-32.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-33.jpg",
    "https://www.knit.ac.in/recruiters/recruiting-34.jpg",

  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-center mt-8">
        <span className="w-[30%] flex flex-col justify-center gap-1 items-center rounded-xl shadow p-2 h-[200px] shadow-2xl">
          <img
            src="https://www.knit.ac.in/images/governor.jpg"
            alt=""
            className="w-24 h-24 rounded-full"
          />
          <p className="text-red-500 font-bold">Smt. Anandiben Patel</p>
          <p>Hon'ble Governor, Uttar Pradesh</p>
        </span>
        <span className="w-[30%] flex flex-col justify-center gap-1 items-center rounded-xl shadow p-2 h-[200px] shadow-2xl">
          <img
            src="https://www.knit.ac.in/site/writereaddata/siteContent/202305181556346961VC_180523.jpg"
            alt=""
            className="w-24 h-24 rounded-full"
          />
          <p className="text-red-500 font-bold">Prof. J.P. Pandey</p>
          <p>Vice Chancellor</p>
          <p>Dr. APJAKTU</p>
        </span>
        <span className="w-[30%] flex flex-col justify-center gap-1 items-center rounded-xl shadow p-2 h-[200px] shadow-2xl">
          <img
            src="https://www.knit.ac.in/site/writereaddata/siteContent/202309141441549669director-new.jpg"
            alt=""
            className="w-24 h-24 rounded-full"
          />
          <p className="text-red-500 font-bold">Dr. R.K. Upadhyay</p>
          <p>Director, KNIT</p>
        </span>
      </div>

      <div className="px-4 h-[650px] overflow-hidden mt-8">
        <h1 className="text-2xl font-semibold">Our Gems</h1>
        <span className="flex flex-wrap gap-2 px-4 mt-4">
          {student.map(function (student) {
            return <Card student={student} />;
          })}
        </span>
      </div>

      {/* <div className="px-4">
        <h1 className="text-2xl font-semibold">Career Development Cell</h1>
        <span className=" flex gap-4 px-4 mt-4">
          <span className="flex flex-col py-8 px-3 rounded-lg items-center w-[200px] gap-2 shadow-2xl">
            <img src="/prf.dl.png" alt="" className="rounded-full w-20 h-20" />
            <p>Prof. D.L. Gupta</p>
            <p className="text-sm font-semibold">Professor In-charge</p>
            <p>+919415156184</p>
          </span>

          <span className="flex flex-col py-8 px-3 rounded-lg items-center w-[200px] gap-2 shadow-2xl">
            <img src="/prf.dl.png" alt="" className="rounded-full w-20 h-20" />
            <p>Prof. Amit Medhavi</p>
            <p className="text-sm font-semibold">
              Additional Professor In-charge
            </p>
            <p>+919532888592 </p>
          </span>

          <span className="flex flex-col py-8 px-3 rounded-lg items-center w-[200px] gap-2 shadow-2xl">
            <img src="/prf.dl.png" alt="" className="rounded-full w-20 h-20" />
            <p>Prof. Ambuj Kumar</p>
            <p className="text-sm font-semibold">
              Additional Professor In-charge
            </p>
            <p>+917903197767</p>
          </span>
          <span className="flex flex-col py-8 px-3 rounded-lg items-center w-[200px] gap-2 shadow-2xl">
            <img src="/prf.dl.png" alt="" className="rounded-full w-20 h-20" />
            <p>Prof. Ritesh Upadhyay</p>
            <p className="text-sm font-semibold">Office Assistant</p>
            <p>+917007107513</p>
          </span>
        </span>
      </div> */}

      <div className="px-4 mt-4">
        <h1 className="text-2xl font-semibold">Recruiting Partners</h1>
        <span className="flex flex-wrap gap-2 mt-4 px-4 px-2">
          {partners.map(function (partner) {
            return (
              <div className="border overflow-hidden rounded-lg">
                <img src={partner} alt="" className="w-[150px]" />
              </div>
            );
          })}
        </span>
      </div>
    </div>
  );
}
