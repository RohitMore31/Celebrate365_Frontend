import axios from "axios";
import React from "react";


export default function AddNew() {
  let addHandler=(e)=>{
    e.preventDefault();
    console.log(e);
    let uname = e.target.elements.uname.value;
    let lname = e.target.elements.lname.value;
    let  email = e.target.elements.email.value;
    let date = e.target.elements.date.value;
    let jsonInput={
      fname:uname,
      lname:lname,
      date:date,
    }
    console.log(jsonInput.date);
    axios.post("http://localhost:4000/addnew",jsonInput).then((resp)=>{
      console.log(resp);
    })
  }

  
  return (
   
    <div className="Addnew">
      <h3 className="title-form-control">Add New Friend !!!!!</h3> 
      <form className="form" onSubmit={addHandler} >
        <div>
          <label for="uname">First Name</label>
          <br />
          <input type="text" id="uname" name="uname"></input>
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
          <label for="date">Birth Date</label>
          <br />
          <input type="date" id="date" name="date" value="2013-12-12"></input>
        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
