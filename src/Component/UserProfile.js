import React, { useState } from 'react'
import Profile from './Profile';
import SignUp from './SignUp';

export default function UserProfile() {
  const [signinStatus,setSigninStatus]=useState();
  return (
    <div>
      <h2>UserProfile</h2>
      <SignUp></SignUp>
      <Profile></Profile>
    </div>
  )
}
