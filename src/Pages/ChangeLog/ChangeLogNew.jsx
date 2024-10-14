import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Quill  from '../../component/Quill/Quill.jsx'
function ChangeLogNew() {
    const [pageTitle , setPageTitle] = useState('');
    const [Description , setDescription] = useState('');
    const [releaseVersion , setReleaseVersion] = useState('')
    const [ Categories ,setCategories] = useState({
        new :false,
        improvement:false,
        bugFixes:false,
        Maintainence:false,
        refactor:false
    })
  return (
    <div>
        <div className='sticky top-0 z-50'>
        <Navbar />
      </div>

      <div className='flex  justify-center bg-white h-auto pb-32'>
        <div className=' mt-5 w-2/5'> 
            <div>
                <p className='font-medium text-[18px]'>Add New Change Log</p>
                <p className='text-gray-500 text-[15px] mt-1'>Let’s get started by filling in the information below to create your new changelog.</p>
            </div>

            <div className='flex flex-col mt-4'>
                <label className='font-medium text-[16px] mb-2'>Title</label>
                <input className='px-3 py-1 rounded-md border-gray-200 border-2 focus:outline-blue-300'/>
            </div>
            <div className='flex flex-col mt-4'>
                <label className='font-medium text-[16px] mb-2'>Description</label>
                <Quill />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='font-medium text-[16px] mb-2'>Release Version(optional)</label>
                <input className='px-3 py-1 rounded-md border-gray-200 border-2 focus:outline-blue-300'/>
            </div>
            <div className='flex flex-col mt-4'>
                <label className='font-medium text-[16px] mb-2'>Release Categories</label>
                <div className='flex items-center'>
                    <div className=''>
                        <input type='checkbox' name="new" className='appearance-none h-4 w-4 border-1 border-green-600 rounded-md  checked:bg-green-800' />
                        {/* yaha pai jo appearence none sa hum browser ki default css ko hta sakte hai */}
                        <label className='bg-green-100 px-2 py-[2px] rounded text-[14px] mx-2 font-semibold text-green-800'>New </label>
                    </div>

                    <div>
                        <input type='checkbox' name="improvement" className='appearance-none h-4 w-4 border-1 border-gray-600 rounded-md checked:bg-gray-800'/>
                        <label className='bg-gray-200 px-2  py-[2px] rounded text-[14px] mx-2 font-semibold'> Improvement</label>
                    </div>

                    <div>
                        <input type='checkbox' name="bugfixes" className='appearance-none h-4 w-4 border-1 border-red-600 rounded-md checked:bg-red-800'/>
                        <label className='bg-red-100 px-2 py-[2px] rounded text-[14px] mx-2 font-semibold text-red-800'>Bug Fixes</label>
                    </div>

                    <div>
                        <input type='checkbox' name='maintainence' className='appearance-none h-4 w-4 border-1 border-blue-600 rounded-md checked:bg-blue-800'/>
                        <label className='bg-blue-100 px-2 py-[2px] rounded text-[14px] mx-2 font-semibold text-blue-800'>Maintainence</label>
                    </div>

                    <div>
                        <input type='checkbox' name="refactor" className='appearance-none h-4 w-4 border-1 border-yellow-600 rounded-md checked:bg-yellow-800'/>
                        <label className='bg-yellow-100 px-2 py-[2px] rounded text-[14px] mx-2 font-semibold text-yellow-800' >Refactor</label>
                    </div>
                </div>
            </div>

            <div className='flex flex-col mt-4'>
                <label className='font-medium text-[16px] mb-2'>Release Tags(optional)</label>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <input type='checkbox' className="appearance-none h-4 w-4 border-1 border-gray-400 rounded-md checked:bg-blue-600" />
                        <label className=' text-[15px] mx-2 font-semibold '>Inline 1 </label>
                    </div>

                    <div className=' flex items-center '>
                        <input type='checkbox'  className="appearance-none h-4 w-4 border-1 border-gray-400 rounded-md checked:bg-blue-600" />
                        <label className='  text-[15px] mx-2 font-semibold'> Inline 2</label>
                    </div>

                    <div className=' flex items-center '>
                        <input type='checkbox'  className="appearance-none h-4 w-4 border-1 border-gray-400 rounded-md checked:bg-blue-600" />
                        <label className=' text-[15px] mx-2 font-semibold '>Inline checked</label>
                    </div>

                    <div className=' flex items-center '>
                        <input type='checkbox' className="appearance-none h-4 w-4 border-1 border-gray-400 rounded-md checked:bg-blue-600" />
                        <label className=' text-[15px] mx-2 font-semibold '>Inline 4</label>
                    </div>

                    
                </div>
            </div>

            <div className='flex flex-col mt-4'>
                <label className='font-medium text-[16px] mb-2'>Schedule release On</label>
                <input type='text' placeholder='Select Date and Time' className='px-3 py-1 rounded-md border-gray-200 border-2 focus:outline-blue-300'/>
            </div>

            <div className='mt-4 flex items-center justify-end'>
                <button className='px-2 py-1 text-[18px] border-gray-300 border-2 mr-3   rounded-md bg-transparent'>Cancel</button>
                <button className='bg-blue-700 text-white h-10 rounded-lg'>
                    <span className='px-4'>Publish ChangeLog Now</span>
                    <span className='py-2 px-3 border-l-2 border-blue-950'><i class="fa-solid fa-chevron-down"></i></span>
                </button>
            </div>
            
        </div>
      </div>

    </div>
  )
}

export default ChangeLogNew