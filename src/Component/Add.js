import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import FeactutePr from './FeactutePr'
import NewPr from './NewPr'

export default function Product() {
  return (
    <div>
       <Link to="feature">feature</Link> 
       <Link to="new">feature</Link>
       <Outlet />
    </div>
  )
}
