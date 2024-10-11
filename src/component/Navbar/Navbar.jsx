import React from 'react'

function Navbar() {
  return (
    <header className='bg-gray-800 w-full text-white '>
        <div className='flex justify-between items-center px-10 py-1'>
            <div className='flex items-center'>
                 <p className='mr-3 font-serif'>Quick Release</p>
                 <button className=' px-3 py-2 rounded-lg hover:bg-gray-900 cursor-pointer'>Change Log</button>
            </div>
            <div className='flex'>
                <div className='flex items-center mr-4'>
                    <input  type="text" placeholder='search' className=" py-[4px] px-5 rounded-lg focus:outline-none focus:border-transparent bg-gray-700 w-80"/>
                </div>
                <div className='flex items-center'>
                <i class="fa-regular fa-bell mr-4"></i>
                    <img className='w-9 h-9 object-cover rounded-full' src='https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=1024x1024&w=is&k=20&c=Ve_FZ5p_gO5Kd3gkW6nVicgiwAi5I0lXcW_L4MGKLEY='/>
                </div>
            </div>
            
        </div>
    </header>
  )
}

export default Navbar