import React from 'react';

function GeneralSettingLeft({ value ,generalSet , tagSet , onGeneralActive , onTagActive }) {
  return (
    <div>
      <div>
        {value.map((values, index) => (
          <div key={index} className={`flex cursor-pointer hover:bg-gray-300 px-2 py-2 mb-3 hover:rounded-md ${values === 'General' && onGeneralActive ? 'bg-gray-300 rounded-lg': values !== 'General' && onTagActive ? 'bg-gray-300 rounded-lg': 'hover:bg-gray-300'}`}  onClick={ (values === 'General' ? generalSet : tagSet)}>
            <p>{values}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralSettingLeft;
