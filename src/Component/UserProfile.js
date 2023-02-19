import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';
import { increment,changeActiveStatus,getUserInfo } from '../ReduxToolkit/UserInfo/UserDetailSlice'

export default function UserProfile() {
  // const [signinStatus,setSigninStatus]=useState();
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  console.log("inside a signIn.js",userData.fname);
  console.log("inside a signIn.js",userData.email);
  console.log("inside a signIn.js",userData.uid);


  return (
<div className='userprofile'> 
    <h2 >UserProfile</h2>
  <div className="container rounded bg-white mb-5">
    <div className="row justify-content-evenly ">
      <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-3"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
            <span className="font-weight-bold">{userData.fname}</span>
            <span className="text-black-50">{userData.email}</span><span> </span></div>
          </div>
          <div className="col-md-7 border-right">
            <div className="p-3 py-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                  <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value={userData.fname}/></div>
                  <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value={userData.sname} placeholder="surname"/></div>
              </div>
              <div className="row mt-3">
                  <div className="col-md-12 p-1"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value={userData.phoneno}/></div>
                  <div className="col-md-12 p-1"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address" value={userData.address}/></div>
                  <div className="col-md-12 p-1"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value={userData.email}/></div>
                  <div className="col-md-12 p-1"><label className="labels">Education</label><input type="date" className="form-control" placeholder="enter birthday" value={userData.birthday}/></div>
              </div>
              <div className="row mt-3">
                  <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value={userData.country}/></div>
                  <div className="col-md-6"><label className="labels">State</label><input type="text" className="form-control" value={userData.state} placeholder="state"/></div>
              </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
    </div>
  </div>
</div>
  )
}
