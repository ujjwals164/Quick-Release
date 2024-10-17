import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import AdminProfileDropdown from '../Dropdown/AdminProfileDropdown';
import { useMediaQuery } from '@uidotdev/usehooks';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [ drop , setDrop] = useState(false)
    const isSmallDevice = useMediaQuery('only screen and (max-width: 768px)');
    const isMediumDevice = useMediaQuery('only screen and (min-width: 769px) and (max-width: 992px)');
    const isLargeDevice = useMediaQuery('only screen and (min-width: 993px) and (max-width: 1200px)');
    const isExtraLargeDevice = useMediaQuery('only screen and (min-width: 1201px)');

    // Function to toggle the state
    const toggleContent = () => {
      setIsOpen(!isOpen);
    };

    const handleOnChange = ()=>{
            setDrop(!drop)
    }
    let clasname = ''
    if(isSmallDevice || isMediumDevice){
        clasname='top-28 left-16'
    }
    if(isLargeDevice || isExtraLargeDevice){
         clasname='top-12 right-10'
    }
  
  return (
    <header className='bg-gray-800 w-full text-white '>
        <div className='flex justify-between items-center px-10 py-1'>
            <div className='flex items-center'>
                 <p className='mr-3 font-serif'>Quick Release</p>
                 <button className=' px-3 py-2 rounded-lg hover:bg-gray-900 cursor-pointer'><Link to="/change-log">Change Log</Link></button>
            </div>
            <div className='hidden lg:flex'>
                <div className='flex items-center mr-3'>
                    <input  type="text" placeholder='search' className=" py-[4px] px-5 rounded-lg focus:outline-none focus:border-transparent bg-gray-700 w-80"/>
                </div>
                <div className='flex items-center'>
                    <i class="fa-regular fa-bell mr-4 hover:text-gray-400 hover:border-gray-400 hover:border-2 hover:rounded-lg p-1"></i>
                    <img onClick={handleOnChange}  className='w-9 h-9 object-cover rounded-full' src='https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=1024x1024&w=is&k=20&c=Ve_FZ5p_gO5Kd3gkW6nVicgiwAi5I0lXcW_L4MGKLEY='/>
                    <div className='hidden lg:flex' >
                      {drop && <AdminProfileDropdown dropdownPosition={clasname} />}
                    </div>
                    
                </div>
                
            </div>
            
            {/* Responsive code below */}
            <div  className='flex lg:hidden'>
                <button  onClick={toggleContent}>
                {isOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
                </button>
            </div>

            {isOpen && (
                        <div className="mt-4 p-4 bg-gray-100 fixed top-6 inset-0 border rounded lg:hidden ">
                            <div className='flex items-center mr-4'>
                            <p className='text-black text-[14px]'>Search</p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-black text-[14px]'>Notifications</p>
                                    <div onClick={handleOnChange} className='flex items-center mt-2 '>
                                            <img className='w-7 h-7 object-cover rounded-full' src='https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=1024x1024&w=is&k=20&c=Ve_FZ5p_gO5Kd3gkW6nVicgiwAi5I0lXcW_L4MGKLEY='/>
                                            <p  className='text-black text-[14px] ml-2'>Profile</p>
                                            <div className='flex lg:hidden'>

                                              {drop && <AdminProfileDropdown dropdownPosition={clasname} />}
                                            </div>
                                    </div>
                                </div>
                        </div>
            )}
            
            
            
        </div>
    </header>
  )
}

export default Navbar