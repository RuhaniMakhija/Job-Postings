import React from 'react'
import save from "../utils/save.png"
const ResultCard = ({jobData}) => {



  const {
    company_name,
    images,
    education_required,
    experience_required,
    no_of_applicants,
    posting_city,
    posting_state,
    posting_time,
    salary,
    skills_percentage_AI,
    skills_percentage_JQuery,
    skills_percentage_JS,
    skills_percentage_ML,
    job_title
  } = jobData;

  return (
    <div className=' text-white py-10'>
      <div className='flex justify-between bg-[#323C52] rounded-lg p-10'>
        <div className='flex items-center'>
                <img src={images}  className="w-36 px-4" alt='img'/>
                <div>
                    <h1> {job_title} </h1>
                    <p>{company_name}</p>
                    <p>{posting_city}, {posting_state}, India</p>
                </div>
        </div>

        <div className='flex items-center'>
                <h1>Skill Match</h1>
                <div className='border border-blue-600 p-4 rounded-full'>
                    <h1>{skills_percentage_JS}%</h1>
                </div>
        </div>

      </div>
      <div className='py-5 p-10 flex justify-between'>
        <p>{posting_time} . {no_of_applicants} applicants</p>
        <div className='flex'>
            <button className='bg-[#5CA4A9] px-6 py-2 rounded-full'>Apply Now</button>
           <img src={save} className='w-[38px]' alt='save'/>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
