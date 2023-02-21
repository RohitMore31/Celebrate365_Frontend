import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';


export default function AddNew() {
  let userData =useSelector((state)=>state.userInfo.UserInfo);
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
    console.log(jsonInput.date);
    axios.post("http://localhost:4000/addnew",jsonInput).then((resp)=>{
      console.log(resp);
      if(resp.data.Status==="error"){
        console.log("inside error");
        setAddStatus(true);
        setAddStatusInfo("error try again");
      }else if(resp.data.Status==="sucess"){
        console.log("inside sucess");
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
          {/* <label for="date">Birth Date</label>
          <br />
          <input type="date" id="date" name="date" value=""></input> */}
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
