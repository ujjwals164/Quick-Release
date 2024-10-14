import React from 'react'

function ProfileRightEmail() {
  return (
    <div>
        <div>
            <div>
                <h2 className='mb-1 text-[18px] font-medium'>Preferences</h2>
                <p className='text-gray-500 font-medium text-[15px]'>Please change your personal preferences.</p>
            </div>
            <div className='mt-4'>
                <input type="checkbox"  />
                <label className='ml-2 text-[16px]'> Enable All Email Alerts</label>
            </div>
            <p className='ml-5 text-[14px] text-gray-600' >If disabled, no email alert will land in your inbox.</p>
        </div>
    </div>
  )
}

export default ProfileRightEmail