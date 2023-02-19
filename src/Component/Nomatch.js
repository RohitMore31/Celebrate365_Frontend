import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Nomatch() {
  const Navigate = useNavigate();
  return (
    <>
    <div>Page Not Found !!!!!!!</div>
    <button className='btn' onClick={()=>Navigate(-1)}>HomePage</button>
    </>
  )
}
