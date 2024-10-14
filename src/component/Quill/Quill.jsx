import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

function Quill() {
    const [value, setValue] = useState('');
  return (
    

  <ReactQuill theme="snow" value={value} placeholder="Enter Your Message" onChange={setValue} className='mb-10 h-48' />
  )
}

export default Quill