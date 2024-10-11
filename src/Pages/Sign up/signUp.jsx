import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function signUp() {
    const [name , setName] = useState({
        firstN:'',
        lastN:'',
        email:'',
        orgName:'',
        password:'',
        confPassword:''
    })
    const [error , setError]=useState({
        firstN:false,
        lastN:false,
        email:false,
        orgName:false,
        password:false,
        confPassword:false
        
    })
    const [checkBox , setCheckBox] = useState(false)
    const checkBoxChange = ()=>{
        setCheckBox(!checkBox)
    }
    const handleChange = (e)=>{
        e.preventDefault();
    
   
      const newErrors = {
        firstN:name.firstN.trim() === '',
        lastN:name.lastN.trim() === '',
        email:name.email.trim() === '',
        orgName:name.orgName.trim() === '',
        password:name.password.trim() === '',
        confPassword:name.confPassword.trim() === '',
      }
      setError(newErrors)
     
    };
        
    
  return (
    <div >
  
  
    <div className="flex items-center flex-col mt-16 mb-10">
        <h2 className='font-medium text-2xl font-mono'>Quick Release</h2>
        <div className='bg-white mt-4  p-6  items-center rounded-lg'>
            <div className='w-auto '>
                    <h1 className='font-semibold text-1xl  font-sans text-lg'>Create your account</h1>
                    <div className='flex mt-5'>
                        <div className='mr-4'>
                            <label className='pb-2 flex'>First Name</label>
                            <input placeholder='First Name' value={name.firstN} onChange={(e)=> setName({firstN:e.target.value})} className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                            {error.firstN && <p className='text-red-500 text-[12px]'>This Feild is required</p>}
                        </div>
                        <div>
                            <label className='pb-2 flex'>Last Name</label>
                            <input placeholder='Last Name' value={name.lastN} onChange={(e)=> setName({lastN:e.target.value})}  className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                            {error.lastN && <p className='text-red-500 text-[12px]'>This Feild is required</p>}
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>Your Email</label>
                        <input placeholder='name@company.com'  value={name.email} onChange={(e)=> setName({email:e.target.value})} className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                        {error.email && <p className='text-red-500 text-[12px]'>This Feild is required</p>}
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <label className='pb-2'>Organisation Name</label>
                        <input placeholder="Company Name" value={name.orgName} onChange={(e)=> setName({orgName:e.target.value})}  className=' rounded-lg p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                        {error.orgName && <p className='text-red-500 text-[12px]'>This Feild is required</p>}
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='pb-2'>New Password</label>
                        <input placeholder='******' value={name.password} onChange={(e)=> setName({password:e.target.value})}  className=' rounded-md p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                        {error.password && <p className='text-red-500 text-[12px]'>This Feild is required</p>}
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <label className='pb-2'>Confirm Password</label>
                        <input placeholder="******" value={name.confPassword} onChange={(e)=> setName({confPassword:e.target.value})}  className=' rounded-lg p-2 font-light bg-transparent border-[1px]  outline-blue-500'/>
                        {error.confPassword && <p className='text-red-500 text-[12px]'>This Feild is required</p>}
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <div className='flex justify-center'>
                                <input type="checkbox" className='mr-2' value={checkBox} onChange={checkBoxChange} />
                                <label className='text-gray-400 text-[13px]' >I accept the</label>
                                <span className='text-blue-500 text-[13px] ml-1'>Terms and Conditions</span>
                        </div>
                        
                    </div>
                    {checkBox ? (<button onClick ={handleChange} className='mt-5 bg-blue-600 rounded-lg text-white pt-2 pb-2 w-96'>Create An Account</button>) : ( <button className='mt-5 bg-gray-400 rounded-lg text-white pt-2 pb-2 w-96'>Create an Account</button>
                      )}
                   
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