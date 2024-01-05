import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsCircle } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex justify-between p-6  bg-[#303B54] items-center'>
      <div className='text-white ml-16'>
        <h1>Jobs</h1>
      </div>
      <div className='flex items-center'>
        <input type='text' placeholder='Search' className='px-4 py-1 shadow-sm rounded-full w-[490px] bg-[#242D40] text-white'/>
        <IoSearchOutline className='text-white ml-[-33px]'/>
      </div>
      <div className='flex mr-16 items-center'>


      <FaCircleUser className='text-[32px]' />
      <IoNotificationsCircle  className='text-[36px]'/>
      </div>
    </div>
  )
}

export default Header
