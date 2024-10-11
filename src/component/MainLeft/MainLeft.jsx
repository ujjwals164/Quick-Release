import React from 'react'
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';

function MainLeft({people ,onPersonClick}) {
 
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev); // Toggle dropdown visibility
    };
  
    const handleItemSelect = (item) => {
      console.log(item); // Handle item selection
      setIsOpen(false); // Close dropdown after selecting an item
    };
  
    const dropdownItems = ['Publish', 'Draft', 'Archieve'];
  return (
    <div>
        <div>
            <div className='py-3 flex justify-between items-center px-7'>
                <p className='text-gray-600 font-serif text-[19px]'>Change Logs</p>
                <div className='px-3 py-1 bg-slate-300 rounded-lg cursor-pointer relative inline-block  hover:bg-gray-400' onClick={toggleDropdown} >
                 <i class="fa-solid fa-filter" ></i>
                                <Dropdown
                        isOpen={isOpen}
                        items={dropdownItems}
                        onItemSelect={handleItemSelect}
                      />
                </div>
                

            </div>
            <div className='grid grid-cols-1 '>
                {people.map((card)=>(
                        
                   <div key={card.id} className=' bg-white text-black pl-8 pr-11 py-8 border-b-[1px] border-gray-3000 hover:bg-gray-100' onClick={() => onPersonClick(people)} >
                      <p className='mb-1 text-[20px]' >{card.title}</p>
                      <p className='mb-1 text-gray-500 text-[15px]' >{card.createdBy}</p>
                      <p className='text-gray-600 text-[18px]'>{card.description}</p>

                   </div>

                    

                ))}
               
            </div>
        </div>
    </div>
  )
}

export default MainLeft


