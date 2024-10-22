import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import SettingLeft from '../../component/SettingLeft/SettingLeft.jsx'
import SettingRight from '../../component/SettingRight/SettingRight.jsx'

function ProfileGeneral() {
    // const navigate = useNavigate();
    const [ selectedOption ,  setSelectedOption] = useState('Profile')
    const [ password , setPassword] = useState(null)
    const [ emails, setEmails] = useState(null)
    const handleProfileChange = ()=>{
        setSelectedOption('Profile')
        setPassword(null)
        setEmails(null)
    }

    const handlePasswordchange = ()=>{
        setPassword('Change Password')
        setSelectedOption(null)
         setEmails(null)
    } 
    const handleEmailPref = ()=>{
        setEmails('Email Preferences')
        setSelectedOption(null)
        setPassword(null)
    }
    const seValue = ["Profile" , "Change Password" , "Email Preferences" ]
  return (
    <>
    <div className='sticky top-0 z-50'>
        <Navbar/>
    </div>
    <div className='bg-white h-screen px-36 '>
        <div className='flex'>
            <div className='w-[200px]   fixed top-24 left-48 px-2'>
            {/* The below line is that in which we take value from our left component through passing function then here we chnage the state of that element and after that we pass that value to our setting right part */}
               <SettingLeft onProfile = {handleProfileChange} onPassword={handlePasswordchange} emailPref={handleEmailPref} value={seValue} profileActive={selectedOption} passwordActive={password} emailActive={emails}/>
            </div>
            <div className='fixed top-24 left-[65vh] h-full w-[70vh] pl-8'>
                <SettingRight value={selectedOption}  pass = {password} emailP = {emails}/>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default ProfileGeneral