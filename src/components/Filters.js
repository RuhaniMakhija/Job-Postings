import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Filters = ({ onFiltersChange }) => {
    const [filterData, setFilterData] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});
   
    const getFilterData=async()=>{
        const data= await fetch("https://demo0893509.mockable.io/filter-data")
        const json=await data.json();
        setFilterData(json);
    }
    useEffect(()=>{
        getFilterData();
    },[])

    const handleCheckboxChange = (category, option) => {
      setSelectedFilters((prevFilters) => {
        const categoryFilters = prevFilters[category] || [];
    
        let updatedFilters;
    
        if (categoryFilters.includes(option)) {
          // Remove the option if it's already selected
          updatedFilters = {
            ...prevFilters,
            [category]: categoryFilters.filter((item) => item !== option),
          };
        } else {
          // Add the option if it's not selected
          updatedFilters = {
            ...prevFilters,
            [category]: [...categoryFilters, option],
          };
        }
    
        return updatedFilters;
      });
    };
    useEffect(() => {
      // Call onFiltersChange after updating state in the effect
      onFiltersChange(selectedFilters);
    }, [selectedFilters, onFiltersChange]);

    
  return (
    <div className='bg-[#171C28] text-white  ml-32 mt-20 rounded-xl drop-shadow-lg w-[25%]'>
      <div className='flex items-center p-4'>
        <h1 className='mr-12'>Filter by </h1>
        <p className='mr-3 text-sm'>{Object.values(selectedFilters).flat().length} filters applied.</p>
        <p className='underline text-sm cursor-pointer' onClick={() => setSelectedFilters({})}>Clear all</p>
      </div>
      <hr className='bg-[#242D40] border-none h-[1px] my-2'/>

      {/* Filters */}
        <div className='px-4'>
            { filterData &&Object.keys(filterData).map(category => (
                <div key={category}>
                <div className='flex justify-between items-center'>
                    <h1>{category}</h1>
                    <FaChevronDown />
                </div>
                {filterData[category].map(option => (

                        <label key={option} className='flex items-center py-1' >
                            <input
                            type="checkbox"
                            className="mr-2 form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            checked={selectedFilters[category]?.includes(option) || false}
                            onChange={() => handleCheckboxChange(category, option)}
                            />
                            {option}
                        </label> 
                ))}
                <hr className='bg-[#242D40] border-none h-[2px] my-2'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filters
