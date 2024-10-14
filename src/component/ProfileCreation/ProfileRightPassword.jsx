import React, { useState } from 'react'
import PasswordChange from '../Modals/PasswordChange'

function ProfileRightPassword() {
    const [open , setOpen] = useState(false)
    const handlePasswordModal = ()=>{
        setOpen(false)
        setTimeout(()=>{
          alert("Your Password is Changed Successfully")
        },1000)
    }
  return (
    <div>
        <div>
            <div>
                <h2 className='mb-1 text-[18px] font-medium'>Change Password</h2>
                <p className='text-gray-500 font-medium text-[15px]'>Please Change Your Password</p>
            </div>
            <div className='mt-4'>
                <div className='flex flex-col'>
                    <label className='text-[14px] mb-2 font-medium '>Old Password</label>
                    <input placeholder='old password ' className='bg-gray-100 px-2 py-2 rounded-md border-[1px] border-gray-300' />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='text-[14px] mb-2 font-medium'>New Password</label>
                    <input placeholder='New password ' className='bg-gray-100 px-2 py-2 rounded-md border-[1px] border-gray-300 ' />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='text-[14px] mb-2 font-medium'>Confirm Password</label>
                    <input placeholder='Confirm password ' className='bg-gray-100 px-2 py-2 rounded-md border-[1px] border-gray-300' />
                </div>
            </div>
            <button className='bg-blue-700 py-2 px-3 rounded-md text-white mt-3 ' onClick={()=> setOpen(true)}>Save</button>

            <PasswordChange value={open} onClose = {()=> setOpen(false)} onSave = {handlePasswordModal}/>
        </div>
    </div>
  )
}

export default ProfileRightPassword