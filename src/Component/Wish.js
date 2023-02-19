import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Wish() {
  const location = useLocation();
//   console.log(location);
//   console.log(location.state.mydata);
    const [wishStatus,setWishStatus]=useState(false);
    const [sendEmailInfo,setSendEmailInfo]=useState("");

  let bdaywishHandler = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let message = e.target[1].value;

    let jsonInput = {
      fname: location.state.mydata.fname,
      lname: location.state.mydata.lname,
      email: email,
      message: message,
    };
    // if pass and repeat pass is same then call axios
    if(message === null){
      jsonInput.message="Wishing you a very happy birthday have a Great Day"
    }
      axios.post("http://localhost:4000/bdaywish", jsonInput).then((resp) => {
      console.log(resp);
      if(resp.data.Status==="error"){
        console.log("inside error");
        setWishStatus(true);
        setSendEmailInfo("Error in sending Try Later ")
      }else if(resp.data.Status==="sucess"){
        console.log("inside sucess");
        setWishStatus(true);
        setSendEmailInfo("Send sucessfully");
        setTimeout(() => {
            setWishStatus(false);
        }, 5000);
      }
    });
    
  };

  return (
    <>
      <div className="wishfirstbox">
        <h2> Wish </h2>
        <div className="card mt-3 " style={{ width: "50vw" }}>
          <div className="card-header">ReciverINFO</div>
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
        <div class="card mt-3 " style={{ width: "50vw" }}>
            <div class="card-header">
                Address
            </div>
            <div class="card-body">
            <div className="row">
            
            <div className="col-md-12 p-1"><label className="labels fs-6">Email ID</label><input type="text" className="form-control" placeholder="enter email id" required /></div>
            <div className="col-md-12 p-1"><label className="labels fs-6">Message</label><input type="text" className="form-control" placeholder="enter message" value="Happy Birthday Dude"/></div>
            </div>
                <button class="btn btn-primary" onClick={bdaywishHandler}>Send Email</button>
            </div>
        </div>
      </div>
      {wishStatus ?<div>{sendEmailInfo}</div>:" "}
    </>
  );
}
