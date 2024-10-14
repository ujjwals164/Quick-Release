import React from 'react'

function PasswordChange({value, onClose , onSave}) {
    if(!value) return null
  return (
    
        <div className='fixed top-0 left-0 bg-gray-500 bg-opacity-50 w-full h-screen flex justify-center items-center'>
            <div className=' bg-gray-100 px-4 py-3 w-96 rounded-lg '>
               <p className='text-[20px] font-medium mb-2'>Change Your Password</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo vero molestias consectetur! Quam excepturi dolore unde fugiat nemo autem amet assumenda? Suscipit, a sit.</p>
                <div className='mt-3'>
                    <button className='bg-gray-300 px-3 py-2 rounded-full mr-2' onClick={onClose}>Cancel</button>
                    <button className='bg-blue-700 text-white px-3 py-2 rounded-full' onClick={onSave} >Save</button>
                </div>
            </div>
        </div>
    
  )
}

export default PasswordChange