import React, { useRef } from 'react'

function About() {
  const ipRef=useRef(null)
  const handleChange=()=>
  {
    console.log(ipRef.current)
    ipRef.current.style.backgroundColor="cyan"
  }
  return (
    <>
    <div ref={ipRef}>About</div>
    <button className='btn btn-success' onClick={handleChange}>Check </button>
    </>
  )
}

export default About