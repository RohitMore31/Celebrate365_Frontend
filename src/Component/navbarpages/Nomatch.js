import React from 'react'
import { useNavigate } from 'react-router-dom'

// No Match Routes
export default function Nomatch() {
  const Navigate = useNavigate();
  return (
    <>
    <div>Page Not Found !!!!!!!</div>
    <button className='btn' onClick={()=>Navigate(-1)}>HomePage</button>
    </>
  )
}
