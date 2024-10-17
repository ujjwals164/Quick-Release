import React from 'react'



function AdminProfileDropdown({dropdownPosition}) {


  

    
  return (
    <div className={`absolute  ${dropdownPosition} z-10 bg-gray-100 rounded-md text-black w-52`}>
         
            <div className='text-[14px] font-medium px-4 my-3 cursor-pointer'>
               <p>Ujjwal Saini</p>
               <p>Ujjwal@crownstack.com</p>
            </div>
            <hr className='text-gray-400'></hr>
            <div className='flex items-center px-4 my-2 text-[14px] text-blue-800 cursor-pointer hover:text-blue-600' >
              <i class="fa-solid fa-circle-plus mr-1"></i>
              <p>Add New team</p>
            </div>
            <hr className='text-gray-400'></hr>
            <div className='px-4 my-2 text-[14px] font-normal cursor-pointer'>
                <p className='mt-2 hover:text-gray-600'>Quick Connect</p>
                <p className='mt-2 hover:text-gray-600'>Quick Survey</p>
                <p className='mt-2 hover:text-gray-600'>Quick Team</p>

            </div>
            <hr className='text-gray-400'></hr>
            <div className='px-4 my-2 text-[14px] font-normal cursor-pointer'>
                <p className='mt-2 hover:text-gray-600'>Account Setting</p>
                <p className='mt-2 hover:text-gray-600'>Profile Setting</p>
                <p className='mt-2 hover:text-gray-600'>Team Setting</p>
            </div>
            <hr className='text-gray-400'></hr>
            <div className='px-4 my-2 cursor-pointer hover:text-gray-600'>
                <p>Sign Out</p>
            </div>
         
    </div>
  )
}

export default AdminProfileDropdown