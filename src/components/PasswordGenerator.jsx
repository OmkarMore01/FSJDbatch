import React, { useState } from 'react'

function PasswordGenerator() {
    const[includeUpper,setIncludeUpper]=useState(true)
    const[includeLower,setIncludeLower]=useState(true)
    const[includesymbol,setIncludeSymbol]=useState(true)
    const[includeNumber,setIncludeNumber]=useState(true)
  return (
    <div>
    <form className='w-50 ms-5'>
    include UpperCase Letter  <input type='checkbox' checked={includeUpper} onChange={()=>setIncludeUpper(!includeUpper)} style={{width:"5%"}}/><br/>
     include LowerCase Letter    <input type='checkbox' checked={includeLower} onChange={()=>setIncludeLower(!includeLower)} style={{width:"5%"}} /><br/>
    include Numbers     <input type='checkbox' checked={includeNumber} onChange={()=>setIncludeNumber(!includeNumber)} style={{width:"5%"}} /><br/>
     include Symbols       <input type='checkbox' checked={includesymbol} onChange={()=>setIncludeSymbol(!includesymbol)} style={{width:"5%"}}/><br/>
    
    </form>
    
    </div>
  )
}

export default PasswordGenerator