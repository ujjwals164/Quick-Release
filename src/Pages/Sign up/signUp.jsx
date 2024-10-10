import React from 'react'
import { Link } from 'react-router-dom'
function signUp() {
  return (
    <div >
  
  
    <div className="flex items-center flex-col mt-16">
        <h2 className='font-medium text-2xl font-mono'>Quick Release</h2>
        <div className='bg-white mt-4  p-6  items-center rounded-lg'>
            <div className='w-auto '>
                    <h1 className='font-semibold text-1xl  font-sans text-lg'>Create your account</h1>
                    <div className='flex mt-5'>
                        <div className='mr-4'>
                            <label className='pb-2 flex'>First Name</label>
                            <input placeholder='First Name' className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                        </div>
                        <div>
                            <label className='pb-2 flex'>Last Name</label>
                            <input placeholder='Last Name' className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>Your Email</label>
                        <input placeholder='name@company.com' className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <label className='pb-2'>Organisation Name</label>
                        <input placeholder="Company Name" className=' rounded-lg p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>New Password</label>
                        <input placeholder='******' className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <label className='pb-2'>Confirm Password</label>
                        <input placeholder="******" className=' rounded-lg p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <div>
                                <input type="checkbox" className='mr-2' />
                                <label className='text-gray-400 text-[13px]' >I accept the</label>
                                <span className='text-blue-500 text-[13px] ml-1'>Terms and Conditions</span>
                        </div>
                        
                    </div>
                    <button className='mt-5 bg-blue-600 rounded-lg text-white pt-2 pb-2 w-96'>Create An Account</button>
                    <div className='mt-5 text-sm'>
                        <span className='text-gray-400 text-sm'>
                            Already have an account ?
                        </span>
                        <span className='ml-1 text-blue-500'>
                        <Link to="/login">Login Here</Link></span>
                    </div>
            </div>
           

        </div>



    </div>
    </div>

  )
}

export default signUp