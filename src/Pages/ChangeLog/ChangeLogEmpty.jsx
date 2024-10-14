import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function ChangeLogEmpty() {
    const navigate = useNavigate()

    const handleChange = ()=>{
        navigate('/change-log/new')
    }
  return (
    <div>
        <div className='sticky top-0 z-50'>
           <Navbar />
         </div>
       <div className='flex justify-center'>
         <div className='flex flex-col items-center py-16'>
            <div className='text-[28px]'>
              <i class="fa-solid fa-folder-plus"></i>
            </div>
            <div className='flex  flex-col items-center my-2'>
                <p className='text-[16px]'>No Changelog added.</p>
                <p className='text-gray-600 text-[14px]'>Get started by creating your first changelog post.</p>
            </div>
            <button className='bg-blue-700 text-white px-3 py-2 mt-2 rounded-lg' onClick={handleChange}> 
                <span className='mr-2'><i class="fa-solid fa-plus"></i></span>
                <span>New Changelog</span>
            </button>
          </div>
       </div>
        
    </div>
  )
}

export default ChangeLogEmpty