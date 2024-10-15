import React from 'react'

function GeneralSettingLeft({generalSet,tagSet}) {
  return (
    <div>
        <div className='flex cursor-pointer hover:bg-gray-300 px-2 py-2 hover:rounded-md' onClick={generalSet}>
           <span className='mr-3'><i class="fa-regular fa-address-card"></i></span>
           <p>General</p>
        </div>
        <div className='flex cursor-pointer mt-3 hover:bg-gray-300 px-2 py-2 hover:rounded-md' onClick={tagSet}>
        <span className='mr-3'><i class="fa-solid fa-lock"></i></span>
        <p className='text-[16px]'>Tag</p>

        </div>
    </div>
  )
}

export default GeneralSettingLeft