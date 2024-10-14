import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import MainLeft from '../../component/MainLeft/MainLeft';
import { cardData } from '../../Data/Data';
import MainRight from '../../component/MainRight/MainRight';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangeLog() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const navigate = useNavigate()
  
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };
  const handleButtonChange = ()=>{
     navigate('/change-log/new')
  }

  return (
    <>
      
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>

      
      <div className='fixed top-[50px] z-40 w-full bg-white'>
        <div className='flex justify-between items-center px-9 py-3'>
          <h2 className='text-3xl font-serif text-black'>Change Logs</h2>
          <button className='bg-blue-700 text-white px-5 py-2 rounded-md' onClick={handleButtonChange}>Add New</button>
        </div>
      </div>

      
      <div className='flex  mt-[75px] '> 
        <div className='w-[400px] border-r-[1px] border-gray-300 overflow-y-auto fixed h-full '>
          <MainLeft people={cardData} onPersonClick={handlePersonClick} />
        </div>

       
        <div className='ml-[400px] fixed overflow-y-auto h-full w-[161vh] pb-96'>
          <MainRight person={selectedPerson} />
        </div>
      </div>
    </>
  );
}

export default ChangeLog;
