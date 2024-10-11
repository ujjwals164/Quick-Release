// Dropdown.js
import React from 'react';

function Dropdown({ isOpen, items, onItemSelect }) {
  if (!isOpen) return null; 

  return (
    <div className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10 w-44">
         <p className='p-3 font-sans border-b-2 border-gray-700 text-gray-400'>Filter By status</p>
      {items.map((item, index) => (
        <div key={index} className="p-2  hover:bg-gray-100 cursor-pointer   flex items-center font-serif" onClick={() => onItemSelect(item)}>
           
             <span style={{ color: index % 2 === 0 ? 'red' : 'blue', fontSize:"29px" }} className="mr-2">•</span>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
