import React, {  useState } from 'react'
import Filters from './Filters'
import Results from './Results'

const Body = ({ searchTerm }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  // Function to handle filter changes
  // const handleFiltersChange = (filters) => {
  //   setSelectedFilters(filters);
  // };
  
  return (
    <div className='flex bg-[#171C28] bg-opacity-98'>
      <Filters onFiltersChange={setSelectedFilters}/>
      <Results searchTerm={searchTerm} selectedFilters={selectedFilters}/>
    </div>
  )
}

export default Body
