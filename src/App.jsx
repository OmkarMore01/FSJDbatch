import React, { createContext, useContext } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Userform from './components/Userform'

//useContext hook
/*
   const userData=createContext();
   
   function Show(){
    const data=useContext(userData)
   return(
    <div>
    <h1> Hello {data}</h1>
    </div>)
}*/
function App() 
{
  return (
    <div>
  {/* <userData.Provider value="teknowell">
      <Show/>
    </userData.Provider> */}
    <Nav/>
    <Home/>
    </div>
  )
}

export default App