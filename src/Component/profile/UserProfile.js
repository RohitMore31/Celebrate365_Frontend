import axios from 'axios';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,changeActiveStatus,getUserInfo } from '../../ReduxToolkit/UserInfo/UserDetailSlice'

export default function UserProfile() {
  // const [signinStatus,setSigninStatus]=useState();
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  console.log("inside a signIn.js",userData.fname);
  console.log("inside a signIn.js",userData.email);
  console.log("inside a signIn.js",userData.uid);
  // // get full details of use using uid
  // let jsonInput = {
  //   uid: userData.uid,
  // };

  let profileUpdateHandler=(e)=>{
    let check = window.confirm("Do You WantTo Update");
    if(check){
    e.preventDefault();
    let fname =e.target[0].value;
    let lname = e.target[1].value;
    let mobile = e.target[2].value;
    let address = e.target[4].value;
    let email = e.target[5].value;
    let dob = e.target[6].value;
    let country = e.target[7].value;
    let state = e.target[8].value;

    let jsonInput = {
      fname: fname,
      lname:lname,
      mobile:mobile,
      address:address,
      email: email,
      dob:dob,
      country:country,
      state:state,
      
    };
  axios.post("http://localhost:4000/user/profile/update",jsonInput).then((resp)=>{
          console.log(resp);
          if(resp.data.Status==="error"){
            console.log("inside error");
          }else if(resp.data.Status==="sucess"){
            console.log("inside sucess ",resp.data);
          }
        }); 
      } 
  }

  return (
<div className='userprofile'> 
    <h2 >UserProfile</h2>
  <div className="container rounded bg-white mb-5">
    <div className="row justify-content-evenly ">
      <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-3"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
            <span className="font-weight-bold fs-3">{userData.fname}</span>
            <span className="text-black-50 fs-5" >{userData.email}</span><span> </span></div>
          </div>
          <div className="col-md-6 border-right">


            <form onSubmit={profileUpdateHandler}>
            <div className="p-3 py-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                  <div className="col-md-6"><label className="labels fs-6">Name</label><input type="text" className="form-control" placeholder="first name" value={userData.fname} name="fname"/></div>
                  <div className="col-md-6"><label className="labels fs-6">Lastname</label><input type="text" className="form-control" value={userData.sname} placeholder="lastname" name="lname"/></div>
              </div>
              <div className="row mt-3 ">
                  <div className="col-md-12 p-1"><label className="labels fs-6">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value={userData.mobile} name="mobile"/></div>
                  <div className="col-md-12 p-1"><label className="labels fs-6">Address Line 1</label><input type="text" className="form-control" placeholder="enter address" value={userData.address} name="address"/></div>
                  <div className="col-md-12 p-1"><label className="labels fs-6">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value={userData.email} name="email"/></div>
                  <div className="col-md-12 p-1"><label className="labels fs-6">birthday</label><input type="date" className="form-control" placeholder="enter birthday" value={userData.dob} name="dob"/></div>
              </div>
              <div className="row mt-3">
                  <div className="col-md-6"><label className="labels fs-6">Country</label><input type="text" className="form-control" placeholder="country" value={userData.country} name="country"/></div>
                  <div className="col-md-6"><label className="labels fs-6">State</label><input type="text" className="form-control" value={userData.state} placeholder="state" name="state"/></div>
              </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
            </div>
            </form>
          </div>
    </div>
  </div>
</div>
  )
}
