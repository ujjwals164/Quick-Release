import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import MainLeft from '../../component/MainLeft/MainLeft';
import { cardData } from '../../Data/Data';
import MainRight from '../../component/MainRight/MainRight';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangeLog() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [ open ,setOpen] = useState(false)
  
  const navigate = useNavigate()
  
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };
  const handleButtonChange = ()=>{
     navigate('/change-log/new')
  }

  const handleModelChange = ()=>{
    setOpen(false)
    setSelectedPerson(null)
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

      
      <div className='mt-[75px]'> 
        <div className='w-[400px] border-r-[1px] border-gray-300 overflow-y-auto fixed h-full hidden lg:flex'>
          <MainLeft people={cardData} onPersonClick={handlePersonClick} />
        </div>

        {/* responsive code */}
        
        <div className="mt-3 px-5 bg-gray-100 fixed top-28 inset-0 h-full overflow-y-auto border rounded lg:hidden ">
             <MainLeft people={cardData} onPersonClick={handlePersonClick} onClick={()=> setOpen(true)} />
        </div>
              
        

       
        <div className='ml-[400px] fixed overflow-y-auto h-full pb-96 hidden lg:flex'>
          <MainRight person={selectedPerson} />
        </div>
        <div className=' flex lg:hidden'>
         <MainRight open={open} person={selectedPerson} onClose={handleModelChange} />
      </div>

      </div>
      

      
      
           
     
    </>
  );
}

export default ChangeLog;
