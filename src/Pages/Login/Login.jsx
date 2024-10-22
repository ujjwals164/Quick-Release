import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Login({setIsAuthenticated}) {
    const navigate = useNavigate();
    const[email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setIsAuthenticated(true);
            
            navigate('/change-log');
        } else {
            alert('Invalid credentials');
        }
    };
  return (
    <div className='h-screen'>
  
  
    <div className="flex items-center flex-col justify-center h-full">
        <h2 className='font-medium text-2xl font-mono'>Quick Release</h2>
        <div className='bg-white mt-4  p-6  items-center rounded-lg'>
            <div className='w-auto '>
                    <h1 className='font-semibold text-1xl  font-sans text-lg'>Sign in to your account</h1>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>Your Email</label>
                        <input placeholder='name@company.com' value={email} onChange={(e)=> setEmail(e.target.value)} required className=' rounded-md p-2 font-light bg-slate-200 border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <label className='pb-2'>Password</label>
                        <input placeholder="******" value={password} onChange={(e)=> setPassword(e.target.value)} className=' rounded-lg p-2 font-light bg-slate-200 border-[1px]  outline-blue-500'/>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <div>
                                <input type="checkbox" className='mr-2' />
                                <label className='text-gray-400 text-sm' >Remember me</label>
                        </div>
                        <p className='text-blue-500'><Link to="/forgot-password">Forget Password</Link></p>
                    </div>
                    <button className='mt-5 bg-blue-600 rounded-lg text-white pt-2 pb-2 w-96' onClick={handleLogin}>Sign Up</button>
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