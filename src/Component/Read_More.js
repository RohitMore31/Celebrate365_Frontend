import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Read_More() {
    const navigate = useNavigate()
  return (
    <div>
        <p>Hiii And learn more about it </p> 
        <button onClick={()=>navigate(-1)}>Home Page</button>
    </div>
  )
}
