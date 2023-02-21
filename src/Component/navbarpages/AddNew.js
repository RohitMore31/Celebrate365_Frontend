import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';


export default function AddNew() {
  // use Select Hooks
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  
  // use states
  const[AddStatus,setAddStatus]=useState(false);
  const[AddStatusInfo,setAddStatusInfo]=useState("");

  let addHandler=(e)=>{
    e.preventDefault();
    console.log(e);
    let uname = e.target.elements.uname.value;
    let lname = e.target.elements.lname.value;
    let email = e.target.elements.email.value;
    let date = e.target.elements.dob.value;
    let jsonInput={
      fname:uname,
      lname:lname,
      date:date,
      email:email,
      uid:userData.uid
    }
    // Axios
    axios.post("http://localhost:4000/addnew",jsonInput).then((resp)=>{
    if(resp.data.Status==="error"){
        setAddStatus(true);
        setAddStatusInfo("error try again");
      }else if(resp.data.Status==="sucess"){
        setAddStatus(true);
        setAddStatusInfo("Added Sucessfully");
      }
      setTimeout(() => {
        setAddStatus(false)
      }, 5000);
    })
  }
  
  
  return (    
    <div className="Addnew">
      <h3 className="title-form-control">Add New Friend !!!!!</h3> 
      {AddStatus?<div>{AddStatusInfo}</div>:""}

      {/* form to get input from user */}
      <form className="form" onSubmit={addHandler} >
        <div>
          <label for="uname">First Name</label>
          <br />
          <input type="text" id="uname" name="uname" required></input>
        </div>
        <div>
          <label for="lname">Last Name </label>
          <br />
          <input type="text" id="lname" name="lname"></input>
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email"></input>
        </div>
        <div>
          <label for="dob">birthday</label><br/>
          <input type="date" id="dob" name="dob" required></input>

        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
