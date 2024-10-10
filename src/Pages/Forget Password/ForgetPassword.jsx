import React from 'react'
import { Link } from 'react-router-dom'
function ForgetPassword() {
  return (
    <div className='h-screen' >
  
  
    <div className="flex items-center flex-col justify-center h-full">
        <h2 className='font-medium text-2xl font-mono'>Quick Release</h2>
        <div className='bg-white mt-4  p-6  items-center rounded-lg'>
            <div className=' '>
                    <h1 className='font-semibold text-1xl  font-sans text-lg'>Forget Your Password</h1>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>Your Email</label>
                        <input placeholder='name@company.com' className=' rounded-md p-2 font-light outline-blue-500 bg-transparent border-[1px]'/>
                    </div>
                   
                    <button className='mt-5 bg-blue-600 rounded-lg text-white pt-2 pb-2 w-96'><Link to="/reset-password">Request Password Reaset Instructions</Link> </button>
                    <div className='mt-5 text-sm'>
                        <span className='text-gray-400 text-sm'>
                            Login to Your account
                        </span>
                        <span className='ml-1 text-blue-500'>
                        <Link to="/login">Sign in</Link></span>
                    </div>
            </div>
           

        </div>



    </div>
    </div>

  )
}

export default ForgetPassword