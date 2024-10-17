import React from 'react'

function CreateProfileModals({open , onClose , onSave}) {
    if(!open) return null
  return (
    
        <div className='w-full h-screen fixed top-0 left-0 bg-gray-200   flex justify-center items-center'>
            <div className='bg-gray-100 px-4 py-3 w-96  transform translate-x-2 translate-y-2 rounded-lg'>
                <p className='text-[20px] font-medium mb-2'>Create Your Profile</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo vero molestias consectetur! Quam excepturi dolore unde fugiat nemo autem amet assumenda? Suscipit, a sit.</p>
                <div className='mt-3 flex justify-end'>
                    <button className='bg-gray-300 px-3 py-2 rounded-full mr-2' onClick={onClose}>Cancel</button>
                    <button className='bg-blue-700 text-white px-3 py-2 rounded-full' onClick={onSave} >Save</button>
                </div>
            </div>
        </div>
    
  )
}

export default CreateProfileModals