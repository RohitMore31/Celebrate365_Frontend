import axios from 'axios';
import React, { useState } from 'react'


export default function Update(props) {
    let p = props.data;
    let statusCheker = props.handler

    const[fname,setFname]= useState(props.data.fname);
    const[lname,setLname]= useState(props.data.lname);
    const[email,setEmail]= useState(props.data.email);
    const[dob,setDob]= useState(props.data.dob);

    let addHandler=(e)=>{
        e.preventDefault();
        console.log(e);
        let uname = e.target.elements.uname.value;
        let lname = e.target.elements.lname.value;
        let  email = e.target.elements.email.value;
        let date = e.target.elements.date.value;
        let jsonInput={
          id:p.id,
          fname:uname,
          lname:lname,
          date:date,
          email:email
        }
        console.log(jsonInput.date);
        axios.put("http://localhost:4000/updatem",jsonInput).then((resp)=>{
        console.log(resp); 
    })
        statusCheker(false);
    }
    let cancelHandler=()=>{
        statusCheker(false);
    }

  return (
    <div className="Addnew">
       <h3 className="title-form-control">Update Friend Info !!!!!</h3> 
      <form className="form" onSubmit={addHandler} >
        <div>
          <label for="uname">First Name</label>
          <br />
          <input type="text" id="uname" name="uname" value={fname} onChange={(e)=>{setFname(e.target.value)}}></input>
        </div>
        <div>
          <label for="lname">Last Name </label>
          <br />
          <input type="text" id="lname" name="lname" value={lname} onChange={(e)=>{setLname(e.target.value)}} ></input>
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
        </div>
        <div>
          <label for="date">Birth Date</label>
          <br />
          <input type="date" id="date" name="date" value={dob} onChange={(e)=>{setDob(e.target.value)}}  ></input>
        </div>
        <div>
          <button className="btn" type="submit">update</button>
          <button className="btn" onClick={cancelHandler}>cancel</button>
        </div>
      </form>
    </div>
  )

}
