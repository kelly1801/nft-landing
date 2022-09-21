import React from 'react'



function Input({title, getCheck, getChange, value}) {


 

  return (
    <label>
    <input type="checkbox" checked={getCheck} value={value} onClick={getChange} />
  {title}
    
  </label>
  )
}

export default Input