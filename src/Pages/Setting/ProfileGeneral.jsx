import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import ProfileLeft from '../../component/ProfileCreation/ProfileRightCreate.jsx'
import SettingLeft from '../../component/SettingLeft/SettingLeft.jsx'
import SettingRight from '../../component/SettingRight/SettingRight.jsx'

function ProfileGeneral() {
    // const navigate = useNavigate();
    const [ selectedOption ,  setSelectedOption] = useState(null)
    const [ password , setPassword] = useState(null)
    const [ emails, setEmails] = useState(null)
    const handleProfileChange = (option)=>{
        setPassword(null)
        setSelectedOption(option)
        setEmails(null)
    }

    const handlePasswordchange = (option)=>{
        setSelectedOption(null)
         setPassword(option)
         setEmails(null)
    } 
    const handleEmailPref = (option)=>{
        setEmails(option)
        setSelectedOption(null)
        setPassword(null)
    }
    
  return (
    <>
    <div className='sticky top-0 z-50'>
        <Navbar/>
    </div>
    <div className='bg-white h-screen px-36 '>
        <div className='flex'>
            <div className='w-1/5  fixed top-24  px-2'>
            {/* The below line is that in which we take value from our left component through passing function then here we chnage the state of that element and after that we pass that value to our setting right part */}
               <SettingLeft onProfile = {handleProfileChange} onPassword={handlePasswordchange} emailPref={handleEmailPref}/>
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