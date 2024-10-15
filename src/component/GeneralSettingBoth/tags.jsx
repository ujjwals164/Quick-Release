import React from 'react'

function tags() {
  return (
    <div>
        <div> 
                <div className='mb-3'>
                    <h2 className='mb-1 text-[18px] font-medium'>Tags</h2>
                    <p className='text-gray-600'>Tags can be assigned to changelogs or posts to define the categories they belong to.</p>
                </div>
                
                <div className='mt-3'>
                    <div className='flex flex-col'>
                        <label className='text-[16px] mb-2 font-medium'>Add new Tag</label>
                        <input placeholder='Ashish' type='text' className='py-2 px-2 rounded-md bg-gray-100'/>
                    </div>
                    
                   
                </div>
                <button className='bg-blue-600 px-3 py-2 rounded-md text-white mt-3' onClick={()=> setOpen(true)}>Save</button>
                     <table class="table-auto">
                        <thead>
                            <tr className='flex justify-between'>
                            <th>Tag Name</th>
                            <th>Action</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='flex justify-between'>
                            
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            </tr>
                            <tr>
                            
                            <td>The Eagles</td>
                            <td>1972</td>
                            </tr>
                            <tr>
                           
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                            </tr>
                        </tbody>
                    </table>

            </div>
    </div>
  )
}

export default tags