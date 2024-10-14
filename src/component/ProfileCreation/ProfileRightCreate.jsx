import React, { useState } from 'react'
import CreateProfileModals from '../Modals/CreateProfileModals.jsx'

function ProfileRightCreate() {
    const [ open , setOpen ] = useState(false)
    const handleSaveChange = ()=>{
        setOpen(false);
        setTimeout(()=>{
            alert("your profile is created successfully")
        },1000)
       
    }
    
  return (
    <div>
        <div> 
                <div className='mb-3'>
                    <h2 className='mb-1 text-[18px] font-medium'>Profile Settings</h2>
                    <p className='text-gray-600'>Change your personal profile settings</p>
                </div>
                <div>
                      <p className='mb-2 text-[18px] font-medium'>Upload Avatar</p>
                      <img className='h-24 w-24 object-cover rounded-full' src='https://images.unsplash.com/photo-1726758254279-6a39c11bdcd5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                </div>
                <div className='mt-3'>
                    <div className='flex flex-col'>
                        <label className='text-[16px] mb-2 font-medium'>First Name</label>
                        <input placeholder='Ashish' type='text' className='py-2 px-2 rounded-md bg-gray-100'/>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <label className='text-[16px] mb-2 font-medium'>Last Name</label>
                        <input placeholder='Dhawan' type='text' className='py-2 px-2 rounded-md bg-gray-100'/>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <label className='text-[16px] mb-2 font-medium'>Email</label>
                        <input placeholder='ashish@gmail.com' type='text' className='py-2 px-2 rounded-md bg-gray-100'/>
                    </div>
                </div>
                <button className='bg-blue-600 px-3 py-2 rounded-md text-white mt-3' onClick={()=> setOpen(true)}>Save</button>

            </div>
            <div >

            <CreateProfileModals open={open} onSave={handleSaveChange} onClose={()=> setOpen(false)} />
            </div>
    </div>
  )
}

export default ProfileRightCreate