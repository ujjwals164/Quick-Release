import React from 'react'
import ProfileRightCreate from '../ProfileCreation/ProfileRightCreate.jsx'
import ProfileRightPassword from '../ProfileCreation/ProfileRightPassword.jsx'
import ProfileRightEmail from '../ProfileCreation/ProfileRightEmail.jsx';

function SettingRight({value ,pass,emailP}) {
    console.log("Value:", value, "Pass:", pass ,"email",emailP); 
  return (
    <div>
       {value && <ProfileRightCreate />}
       {pass && <ProfileRightPassword />}
       {emailP && <ProfileRightEmail />}
    </div>
    
  )
}

export default SettingRight