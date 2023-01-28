import axios from 'axios';
import React, { useState } from 'react'

export default function Update(props) {
    let p = props.data;
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
        }
        console.log(jsonInput.date);
        axios.put("http://localhost:4000/updatem",jsonInput).then((resp)=>{
        console.log(resp); 
    })
        let statusCheker = props.handler
        statusCheker(false);
    }

  return (
    <div className="Addnew">
       <h3 className="title-form-control">Add New Friend !!!!!</h3> 
      <form className="form" onSubmit={addHandler} >
        <div>
          <label for="uname">First Name</label>
          <br />
          <input type="text" id="uname" name="uname" value={p.fname}></input>
        </div>
        <div>
          <label for="lname">Last Name </label>
          <br />
          <input type="text" id="lname" name="lname" value={p.lname}></input>
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email" value={p.email}></input>
        </div>
        <div>
          <label for="date">Birth Date</label>
          <br />
          <input type="date" id="date" name="date" value={p.dob} ></input>
        </div>
        <div>
          <button className="btn" type="submit">update</button>
          <button className="btn" type="submit">cancel</button>
        </div>
      </form>
    </div>
  )

}
