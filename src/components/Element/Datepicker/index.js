import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import './index.module.css'

function Datepicker() {
    const [value,setValue]=useState(new Date())
  return (
    <div className='datepicker-container'> 
        <DateTimePicker onChange={setValue} value={value}/>
    </div>
  )
}

export default Datepicker;