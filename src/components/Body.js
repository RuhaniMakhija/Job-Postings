import React from 'react'
import Filters from './Filters'
import Results from './Results'

const Body = () => {
  return (
    <div className='flex bg-[#171C28] bg-opacity-98'>
      <Filters/>
      <Results/>
    </div>
  )
}

export default Body
