import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const FilterItem = () => {
  return (
    <div className='px-4'>
        <div className='flex justify-between items-center'>
            <h1>Company</h1>
            <FaChevronDown />
        </div>
      <label className='flex items-center py-1'>
        <input
          type="checkbox"
          className="mr-2 form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        Amazon
      </label>
     
     

      <hr className='bg-[#242D40] border-none h-[2px] my-2'/>
      
      
    </div>
  )
}

export default FilterItem
