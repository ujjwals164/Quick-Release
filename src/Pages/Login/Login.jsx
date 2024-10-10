import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='h-screen'>
  
  
    <div className="flex items-center flex-col justify-center h-full">
        <h2 className='font-medium text-2xl font-mono'>Quick Release</h2>
        <div className='bg-white mt-4  p-6  items-center rounded-lg'>
            <div className='w-auto '>
                    <h1 className='font-semibold text-1xl  font-sans text-lg'>Sign in to your account</h1>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>Your Email</label>
                        <input placeholder='name@company.com' className=' rounded-md p-2 font-light bg-slate-200 border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <label className='pb-2'>Password</label>
                        <input placeholder="******" className=' rounded-lg p-2 font-light bg-slate-200 border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <div>
                                <input type="checkbox" className='mr-2' />
                                <label className='text-gray-400 text-sm' >Remember me</label>
                        </div>
                        <p className='text-blue-500'><Link to="/forgot-password">Forget Password</Link></p>
                    </div>
                    <button className='mt-5 bg-blue-600 rounded-lg text-white pt-2 pb-2 w-96'>Sign Up</button>
                    <div className='mt-5 text-sm'>
                        <span className='text-gray-400 text-sm'>
                            Don't have an account yet ?
                        </span>
                        <span className='ml-1 text-blue-500'>
                        <Link to="/signUp">Sign Up</Link></span>
                    </div>
            </div>
           

        </div>



    </div>
    </div>

   
  )
}

export default Login