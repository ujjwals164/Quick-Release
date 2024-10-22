import React, { useState } from 'react'
import GeneralSettingLeft from '../../component/GeneralSettingLeft/GeneralSettingLeft'
import GeneralSettingRight from '../../component/GeneralSettingRight/GeneralSettingRight'
import Navbar from '../../component/Navbar/Navbar'

function GeneralSetting() {
    const [change , setChange] = useState(true)
    const [tagchange , setTagChange] = useState(null)
    const handleGeneralChange = (option)=>{
        setTagChange(null)
        setChange(option)
    }
    const handleTagChange = (option)=>{
        setChange(null)
        setTagChange(option)
    }
    const leftValue = ["General" , "Tags"];
  return (
    <div>
    
                <div className='sticky top-0 z-50'>
                    <Navbar/>
                </div>
                <div className=' h-full'>
                        <div className='flex bg-white '>
                            <div className='w-[200px]  fixed top-24 left-48  '>
                             <GeneralSettingLeft generalSet={handleGeneralChange} tagSet= {handleTagChange} onGeneralActive={change} onTagActive={tagchange} value={leftValue}/>
                            </div>
                            <div className='fixed top-24 left-[65vh] h-full w-[70vh] pl-8'>
                             <GeneralSettingRight value={change} data={tagchange}/>
                            </div>
                        </div>  
                </div>
                
            
        
    </div>
  )
}

export default GeneralSetting