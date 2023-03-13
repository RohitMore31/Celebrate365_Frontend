import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ipadd } from "../ipadd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function AddNew() {
  // use Select Hooks
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  
  // use states
  const [formdata, setFormdata]= useState({
    fname:"",
    lname:"",
    date:"",
    email:"",
    uid:userData.uid
  })
 

  let valueHandler=(e)=>{
    const{name, value}=e.target    
        
  setFormdata({
      ...formdata,[name]:value
    })
  }
  // Add Handler

  let addHandler=(e)=>{
    e.preventDefault();

    // Axios
    axios.post(`http://${ipadd.ipa}:4000/addnew`,formdata).then((resp)=>{
    if(resp.data.Status==="error"){
      notify("Something Wrong Try Again!!!");
        
      }else if(resp.data.Status==="sucess"){
        setFormdata({
          fname:"",
          lname:"",
          date:"",
          email:"",
          uid:userData.uid
        })
        notify(" Added Sucessfully !!");
      }
     
    }).catch(error=>{
      notify(" Server Error Please Try Later !!");
    })
  }
  const notify = (show) => toast(show,{position: "top-left"});
  
  return (    
    <div className="Addnew">
      <h3 className="title-form-control">Add New Friend !!!!!</h3> 
      <ToastContainer />

      {/* form to get input from user */}
      <form className="form" onSubmit={addHandler} >
        <div>
          <label for="uname">First Name</label>
          <br />
          <input type="text" id="uname" name="fname" required value={formdata.fname} onChange={valueHandler}></input>
        </div>
        <div>
          <label for="lname">Last Name </label>
          <br />
          <input type="text" id="lname" name="lname" value={formdata.lname} onChange={valueHandler}></input>
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email" value={formdata.email} onChange={valueHandler}></input>
        </div>
        <div>
          <label for="dob">birthday</label><br/>
          <input type="date" id="dob" name="date" required value={formdata.date} onChange={valueHandler}></input>

        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
