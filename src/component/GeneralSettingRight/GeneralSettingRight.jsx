import React from 'react'
import General from '../GeneralSettingBoth/General'
import Tags from '../GeneralSettingBoth/tags.jsx'
function GeneralSettingRight({value ,data}) {
  return (
    <div>
         {value && <General />}
         {data && <Tags />}
    </div>
  )
}

export default GeneralSettingRight