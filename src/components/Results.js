import React, { useEffect, useState } from 'react'
import ResultCard from "./ResultCard"

const Results = ({ searchTerm,selectedFilters }) => {

  const[results,setResults]=useState([]);
  const getResults=async()=>{
    const data=await fetch("https://demo0893509.mockable.io/jobs");
    const json=await data.json();
    let filteredResults = json.filter(job => job.job_title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Apply selected filters 

    Object.keys(selectedFilters).forEach((category) => {
      if (category === 'Company') {
        // Filter by selected companies
        const selectedCompanies = selectedFilters[category];
        if (selectedCompanies.length > 0) {
          filteredResults = filteredResults.filter((job) =>
            selectedCompanies.includes(job.company_name)
          );
        }
      } else if(category === 'Location') {
        const selectedLocations = selectedFilters[category];
        if (selectedLocations.length > 0) {
          filteredResults = filteredResults.filter((job) =>
            selectedLocations.includes(job.posting_city)
          );
        }
      }else if(category === 'Education'){
        const selectedEducationOptions = selectedFilters[category];
        if (selectedEducationOptions.length > 0) {
          filteredResults = filteredResults.filter((job) =>
            selectedEducationOptions.includes(job.education_required)
          );
        }
      }else if (category === 'Experience') {
        const selectedExperienceOptions = selectedFilters[category];
        if (selectedExperienceOptions.length > 0) {
          filteredResults = filteredResults.filter((job) => {
            const jobExperience = parseInt(job.experience_required, 10);
            return selectedExperienceOptions.some((option) => {
              if (option === '0-2 years') return jobExperience >= 0 && jobExperience <= 2;
              if (option === '3-5 years') return jobExperience >= 3 && jobExperience <= 5;
              if (option === '5-8 years') return jobExperience >= 5 && jobExperience <= 8;
              if (option === 'Above 8 years') return jobExperience > 8;
              return false;
            });
          });
        }
      }else if (category === 'Date Posted') {
        const currentDate = new Date();
        const selectedDateOption = selectedFilters[category];
      
        filteredResults = filteredResults.filter((job) => {
          const daysAgo = parseInt(job.posting_time.split(' ')[1]);

          if (selectedDateOption.includes('Last month')) {
            // Check if the job was posted within the last month
            const postingDate = new Date(currentDate - daysAgo * 24 * 60 * 60 * 1000);
            return currentDate - postingDate <= 30 * 24 * 60 * 60 * 1000;
          }

          if (selectedDateOption.includes('Last 14 days')) {
            // Check if the job was posted within the last 14 days
            const postingDate = new Date(currentDate - daysAgo * 24 * 60 * 60 * 1000);
            return currentDate - postingDate <= 14 * 24 * 60 * 60 * 1000;
          }

          if (selectedDateOption.includes('Last 7 days')) {
            // Check if the job was posted within the last 7 days
            const postingDate = new Date(currentDate - daysAgo * 24 * 60 * 60 * 1000);
            return currentDate - postingDate <= 7 * 24 * 60 * 60 * 1000;
          }
      
          if (selectedDateOption.includes('Last 48 hours')) {
            // Check if the job was posted within the last 48 hours
            const postingDate = new Date(currentDate - daysAgo * 24 * 60 * 60 * 1000);
            return currentDate - postingDate <= 48 * 60 * 60 * 1000;
          }
      
          if (selectedDateOption.includes('Last 24 hours')) {
            // Check if the job was posted within the last 24 hours
            const postingDate = new Date(currentDate - daysAgo * 24 * 60 * 60 * 1000);
            return currentDate - postingDate <= 24 * 60 * 60 * 1000;
          }
         

      
          return true; 
        });
      }else if (category === 'Salary Range') {
        // Handle Salary Range filter
        const selectedSalaryOptions = selectedFilters[category];
      
        if (selectedSalaryOptions && selectedSalaryOptions.length > 0) {
          // Apply salary filter only if salary options are selected
          filteredResults = filteredResults.filter((job) => {
            const salary = parseInt(job.salary, 10);
      
            // Check if job salary is within any selected range
            return selectedSalaryOptions.some((salaryOption) => {
              const minSalary = parseInt(salaryOption.replace('Lakh+', ''), 10);
              const maxSalary = minSalary + 5; // Assuming each range is 5Lakh+
              return salary >= minSalary && salary <= maxSalary;
            });
          });
        }
      }else if (category === 'Skills') {
        const selectedSkills = selectedFilters[category];
      
        if (selectedSkills.includes('Javascript')) {
          // Filter by Javascript with skills_percentage_JS > 90
          filteredResults = filteredResults.filter((job) => {
            const skillPercentageJS = job.skills_percentage_JS;
            return skillPercentageJS && skillPercentageJS > 90;
          });
        }
      
        if (selectedSkills.includes('Machine learning')) {
          // Filter by Machine learning with skills_percentage_ML > 90
          filteredResults = filteredResults.filter((job) => {
            const skillPercentageML = job.skills_percentage_ML;
            return skillPercentageML && skillPercentageML > 90;
          });
        }
      
        if (selectedSkills.includes('Jquery')) {
          // Filter by Jquery with skills_percentage_JQuery > 90
          filteredResults = filteredResults.filter((job) => {
            const skillPercentageJQuery = job.skills_percentage_JQuery;
            return skillPercentageJQuery && skillPercentageJQuery > 90;
          });
        }
      
        if (selectedSkills.includes('Artificial Intelligence')) {
          // Filter by Artificial Intelligence with skills_percentage_AI > 90
          filteredResults = filteredResults.filter((job) => {
            const skillPercentageAI = job.skills_percentage_AI;
            return skillPercentageAI && skillPercentageAI > 90;
          });
        }
      
        // Repeat similar checks for other skills if needed
      }
      
      
      
      
    });

    setResults(filteredResults);
    console.log("results",results);
  }

  //deboucing
  useEffect(() => {
    const timer = setTimeout(() => {
      getResults();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(()=>{
    getResults();
  },[selectedFilters])


 
 
  return (
    <div className='mx-32 mt-20 w-[75%]'>
      <div className='text-white flex items-center justify-between'>
        <h1 className=''>SEARCH RESULTS /JOBS - {results.length} results</h1>
        <div className="flex items-center">
        <p className='mr-5'>Sort By</p>
        <button className='px-6 py-2 bg-white text-black rounded-lg'>Latest</button>
        </div>
      </div>

        <div className='w-8/12 px-4 py-2 rounded-l-full border border-[#566292] text-white mt-10'>
          <h1 className='text-[#FFFFFF]'  >Jobs</h1>
        </div>

        {results.map((job,index)=>(
          <ResultCard key={index} jobData={job}/>
        ))}

     
      {/* <ResultCard job/> */}
     
    </div>
  )
}

export default Results
