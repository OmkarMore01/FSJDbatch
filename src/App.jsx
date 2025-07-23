import React, { createContext, useContext } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Userform from './components/Userform'
import { Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import About from './components/About'
import GetApiData from './components/GetApiData'
import SaveApiData from './components/SaveApiData'
import UserCrud from './components/UserCrud'
import PasswordGenerator from './components/PasswordGenerator'
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
    <Nav/>
  <Routes>
    <Route path='/' element={<Userform/>} />
    <Route path='/card' element={<Card/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/getapidata' element={<GetApiData/>} />
    <Route path='/saveapidata' element={<SaveApiData/>} />
    <Route path='/usercrud' element={<UserCrud/>}/>
    <Route path='/pass' element={<PasswordGenerator/>}/>
  </Routes>


    </div>
  )
}

export default App