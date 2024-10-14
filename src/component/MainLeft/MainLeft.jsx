import React from 'react'
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';

function MainLeft({people ,onPersonClick}) { // is line mai jo yeh people hai yeh props hai jo pass hua  jo change logs log sa pass hua
 
    const [isOpen, setIsOpen] = useState(false);  // state for toggling the dropdown
  
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev); // for togling the dropdown
    };
  
    const dropdownItems = ['Publish', 'Draft', 'Archieve' , "Scheduled"];
  return (
    <div>
        <div className='pb-36'>
            <div className='py-2 flex justify-between items-center px-7'>
                <p className='text-gray-600 font-serif text-[15px]'>Change Logs</p>
                <div className='px-3 py-0 bg-slate-300 rounded-lg cursor-pointer relative inline-block  hover:bg-gray-400' onClick={toggleDropdown} >
                                <i class="fa-solid fa-filter" ></i>
                                <Dropdown isOpen={isOpen} items={dropdownItems} />
                </div>
                

            </div>
            <div className='grid grid-cols-1 '>
                {people.map((card)=>(
                        
                   <div key={card.id} className=' bg-white text-black pl-8 pr-11 py-4 border-b-[1px] border-gray-3000 cursor-pointer hover:bg-gray-100' onClick={() => onPersonClick(card)} >
                      <p className='mb-1 text-[16px]' >{card.title}</p>
                      <p className='mb-1 text-gray-500 text-[12px]' >{card.createdBy}</p>
                      <p className='text-gray-600 text-[13px] font-normal mt-3'>{card.description.slice(1,80) + "....."}</p>

                   </div>

                    

                ))}
               
            </div>
        </div>
    </div>
  )
}

export default MainLeft


