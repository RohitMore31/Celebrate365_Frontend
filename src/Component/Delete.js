import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import FeactutePr from './FeactutePr'
import NewPr from './NewPr'

export default function Delete() {
  return (
    <div className="deletefr">
       {/* <Link to="feature">feature</Link> 
       <Link to="new">feature</Link>
       inside delete 
       <Outlet /> */}
       <div className="slot">
        <label for="uname">First Name</label><br/>
        <input type="text" id="uname" name="uname"></input>
      </div>
      <div className="slot">
        <button className="addnewbtn">Submit</button>
      </div>
    </div>
  )
}
