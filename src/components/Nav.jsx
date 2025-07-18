import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='d-flex bg-info-subtle'>
    <div className='w-50'></div>
    <nav className='d-flex w-100  justify-content-evenly'>
       <Link className='text-decoration-none text-dark' to='/card' >Card</Link>
       <Link className='text-decoration-none text-dark' to='/about' >About</Link>
      <Link className='text-decoration-none text-dark' to='/' >Home</Link>
    </nav>
    
    </div>
  )
}

export default Nav