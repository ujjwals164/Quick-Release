import React from 'react'


function SettingLeft({onProfile , onPassword ,emailPref}) {
    
  return (
    <div>
        
            
            <div>
                <div className='flex items-center bg-gray-400 px-2 py-1 rounded-md mb-2 cursor-pointer hover:bg-gray-300' onClick={onProfile} >
                  <span className='mr-2 text-[20px]'><i class="fa-regular fa-address-card"></i></span>
                  <p className='text-[14px] font-medium' >Profile</p>
                </div>
                <div className='flex items-center   px-2 py-1 rounded-md mb-2 cursor-pointer hover:bg-gray-200' onClick={onPassword}  >
                    <span className='mr-2 text-[20px]'><i class="fa-solid fa-lock"></i></span>
                    <p className='text-[14px] font-medium'>Change Password</p>
                </div>
                <div className='flex items-center   px-2 py-1 rounded-md mb-2 cursor-pointer hover:bg-gray-200' onClick={emailPref}>
                    <span className='mr-2 text-[20px]'><i class="fa-regular fa-address-card"></i></span>
                    <p className='text-[14px] font-medium'>Email Preferences</p>
                </div>
            </div>
            
            
        
    </div>
  )
}

export default SettingLeft



