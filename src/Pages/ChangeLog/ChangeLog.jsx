import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import MainLeft from '../../component/MainLeft/MainLeft'
import { cardData } from '../../Data/Data'
import MainRight from '../../component/MainRight/MainRight'
import { useState } from 'react'

function ChangeLog() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Handle person selection from the list
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <>
       <Navbar/>
       <div className=' w-full  bg-white'>
            <div className='flex justify-between items-center px-14 py-4'>
                <h2 className='text-4xl font-mono text-black'>Change Logs</h2>
                <button className='bg-blue-700 text-white px-5 py-2 rounded-md'>Add New</button>
            </div>

       </div>
       <div className='flex'>
          <div className='w-[68vh] border-r-[1px] border-gray-300'>
              <MainLeft people = {cardData} onPersonClick={handlePersonClick}/> 
              {/* // jo is line mai people hai wo humna props pass kiya hai jo statis data humna import kiya */}
              
          </div>
          <div className='w-full'>
            <MainRight person={selectedPerson}/>
             {/* // jo data humara aya wo humna as a props pass kardiya main right maij */}
          </div>
       </div>
       
       
       
    </>
    
  )
}

export default ChangeLog