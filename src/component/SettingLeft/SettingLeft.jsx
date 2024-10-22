import React from 'react';

function SettingLeft({ onProfile, onPassword, emailPref, value ,profileActive , passwordActive , emailActive} ) {
    return (
        <div>
            {value.map((item, index) => (
                <div 
                    key={index} 
                    className={`flex items-center  px-2 py-1 rounded-md mb-2 cursor-pointer hover:bg-gray-300
                               ${item === "Profile" && profileActive ? 'bg-gray-300' : 
                                item === "Change Password" && passwordActive ? 'bg-gray-300' : 
                                item === "Email Preferences" && emailActive ? 'bg-gray-300' : 
                                'hover:border-r-gray-100'}`} 
                    onClick={() => {
                        
                        if (item === "Profile") {
                            onProfile() 
                            
                        } else if (item === "Change Password") {
                            onPassword() 
                        } else {
                            emailPref() && emailActive ? 'bg-gray-300' : 'hover:bg-gray-100';
                        }
                    }}
                >
                    <p className='text-[14px] font-medium'>{item}</p>
                </div>
            ))}
        </div>
    );
}

export default SettingLeft;
