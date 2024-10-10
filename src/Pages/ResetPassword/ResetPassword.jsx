import React from 'react'
import { Link } from 'react-router-dom'
function ResetPassword() {
  return (

    <div className='h-screen' >
  
  
    <div className="flex items-center justify-center flex-col h-full">
        <h2 className='font-medium text-2xl font-mono'>Quick Release</h2>
        <div className='bg-white mt-4  p-6  items-center rounded-lg'>
            <div className='w-auto '>
                    <h1 className='font-semibold text-1xl  font-sans text-lg'>Set Your Password</h1>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>New Password</label>
                        <input placeholder='******' className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <label className='pb-2'>Confirm Password</label>
                        <input placeholder="******" className=' rounded-lg p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                    </div>
                    
                    <button className='mt-5 bg-blue-600 rounded-lg text-white pt-2 pb-2 w-96'>Set Passoword</button>
                    
            </div>
           

        </div>



    </div>
    </div>

   
  )
}



export default ResetPassword