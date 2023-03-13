import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { ipadd } from "../ipadd";


export default function Wish() {
  //use location hooks
  const location = useLocation();
    const [friendEmail,setFriendEmail]=useState(location.state.mydata.femail)
    const [wishStatement,setWishStatement]=useState("Wishing you a very happy birthday");
  
    const fromuser = useSelector((state)=>state.userInfo.UserInfo)

    // birthday wish handler
    let bdaywishHandler = (e) => {
    e.preventDefault();
    let email = friendEmail;
    let message = wishStatement;
    
    let jsonInput = {
      fname: location.state.mydata.fname,
      lname: location.state.mydata.lname,
      email: email,
      message: message,
      from:fromuser.fname,
    };
    
    // if pass and repeat pass is same then call axios
    if(message === null){
      jsonInput.message="Wishing you a very happy birthday have a Great Day"
    }
    //Axios Post
    axios.post(`http://${ipadd.ipa}:4000/user/bdaywish`, jsonInput).then((resp) => {
      if(resp.data.Status==="error"){
        notify(" Error in sending Try Later ");
       
      }else if(resp.data.Status==="sucess"){
        notify(" Email has been send sucessfully ");
      }
    }).catch((error)=>{
      notify(" Error in sending Try Later ");
    });
  };

  const notify = (show) => toast(show,{position: "top-center"});

  return (
    <div className="wish">
      <div className="wishfirstbox">
        <h2> Wish To your Friend !!!</h2>
          
          {/* div to shoe reciver information */}
       
        <div className="card mt-3 " style={{ width: "50vw" }}>
  

          <div className="card-header">ReciverInfo</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Name</b> : {location.state.mydata.fname}
            </li>
            <li className="list-group-item">
              <b>LastName</b> : {location.state.mydata.lname}
            </li>
            <li className="list-group-item">
              <b>BirthDay</b> : {location.state.mydata.dob}
            </li>
          </ul>
        </div>
      </div>

      <div className="wishfirstbox ">
        <div class="card mt-3 mb-5" style={{ width: "50vw" }}>
            <div class="card-header">
                Address
            </div>
            <form onSubmit={bdaywishHandler}>
            <div class="card-body">
            <div className="row">

      {/* div for update user email if it is not coorect */}
              
                <div className="col-md-12 p-1"><label className="labels fs-6">Email ID</label><input type="email" className="form-control " placeholder="enter email id" required value={friendEmail} onChange={(e)=>{setFriendEmail(e.target.value)}}/></div>
                {/* <div className="col-md-12 p-1"><label className="labels fs-6">Message</label><input type="text" className="form-control-plaintext" placeholder="enter message" value={wishStatement} onChange={(e)=>setWishStatement(e.target.value)}/></div> */}
                <div className="col-md-12 p-1"><label className="labels fs-6">Message</label> </div>
                <textarea class="form-control mt-3" id="exampleFormControlTextarea1" rows="3" placeholder="enter wishes" onChange={(e)=>setWishStatement(e.target.value)}></textarea >
                </div>
                    <button class="btn btn-primary mt-4" type="submit" >Send Email</button>
    
                </div>
            </form>
        </div>
      </div>
      <ToastContainer />     
    </div>
  );
}
