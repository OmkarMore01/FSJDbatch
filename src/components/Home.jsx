import React, { useContext, useReducer, useRef } from 'react'

function Home() {
  /*
  * useRef
  const inputref=useRef(null) 
  const handleClick=()=>
  {
    inputref.current.focus()
    inputref.current.style.backgroundColor="yellow"
  }
  return (

    <div className='container p-5 m-5'>
    <input ref={inputref} type='text' />
    <button onClick={handleClick}>Click me</button>
    </div>
  )*/

    //Use Reducer hook
    /*
  const reducer=(state,action)=>
  {
    switch(action.type)
    {
      case 'inc':return state+1
      case 'dec':return state-1
    }
  }
  const[count,dispatch]=useReducer(reducer,0)

    return (
    <div className='m-5 w-50 d-flex justify-content-around'>
      
      
    
      <button className='btn btn-warning' onClick={()=>dispatch({type:'dec'})}>decrement</button>
        <h1> Count:- {count} </h1>
      <button className='btn btn-success' onClick={()=>dispatch({type:'inc'})}>increment</button>
    </div>
    )*/
   
}

export default Home