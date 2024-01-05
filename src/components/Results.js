import React, { useEffect, useState } from 'react'
import ResultCard from "./ResultCard"

const Results = () => {

  const[results,setResults]=useState([]);
  const getResults=async()=>{
    const data=await fetch("https://demo0893509.mockable.io/jobs");
    const json=await data.json();
    console.log("results",json);
    setResults(json);
    console.log("results",results);
  }
  useEffect(()=>{
    getResults();
  },[])

 
  return (
    <div className='mx-32 mt-20 w-[75%]'>
      <div className='text-white flex items-center justify-between'>
        <h1 className=''>SEARCH RESULTS /JOBS - 2049 results</h1>
        <div className="flex items-center">
        <p className='mr-5'>Sort By</p>
        <button className='px-6 py-2 bg-white text-black rounded-lg'>Latest</button>
        </div>
      </div>

        <div className='w-8/12 px-4 py-2 rounded-l-full border border-[#566292] text-white mt-10'>
          <h1 className='text-[#FFFFFF]'  >Jobs</h1>
        </div>

        {results.map((job,index)=>(
          <ResultCard  jobData={job}/>
        ))}

     
      {/* <ResultCard job/> */}
     
    </div>
  )
}

export default Results
