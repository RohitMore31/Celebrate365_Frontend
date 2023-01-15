import React from "react";
import { useState } from "react";

const SignupForm = () => {
    const[uname,Setuname]=useState('');
    const[password,Setpassword]=useState('');
    const[confpassword,Setconfpassword]=useState('');

    
  const chandleForm = (e) => {
    
    //Checking for password same
    if(password === confpassword){
        console.log("true");
    }else{
        // pass not same then preventing form to submit
    console.log("false");
    console.log(uname);
    console.log(password);
    console.log(confpassword);
        e.preventDefault();
        
    }
    return false;
    
  };
  return (
    <form onClick={chandleForm} className="form">
      <div className="title-form-control">
        <h2>Signup</h2>
      </div>
      <hr></hr>
      <div className="form-control">
        <label>Email : </label>
        <input type="text" name="uemail" id="uemail"
        value={uname}
        onChange={(e)=>Setuname(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Password : </label>
        <input type="text" name="upassword" id="upassword"
         value={password}
         onChange={(e)=>Setpassword(e.target.value)}
         ></input>
      </div>
      <div className="form-control">
        <label>Confirm Password : </label>
        <input type="text" name="confpassword" id="upassword"
         value={confpassword}
         onChange={(e)=>Setconfpassword(e.target.value)}
         ></input>
      </div>
      <div className="form-control">
        <button type="submit" id="btn">
          submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
