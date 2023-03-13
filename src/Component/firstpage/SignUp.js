import axios from "axios";
import React from "react";
import { useState } from "react";
import { ipadd } from "../ipadd";
import SignIn from "./SignIn"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
// use state

  const [registerBtnSwitch,setRegisterBtnSwitch]=useState(true);
  const [formdata,setFormdata]= useState({
    uname:"",
    email:"",
    pass:"",
    repass:""
  })

let valueHandler =(e)=>{
  const{name, value}=e.target    
        
  setFormdata({
      ...formdata,[name]:value
    })
  }
;

// sign up handler  
  let signUpHandler = (e) => {
    e.preventDefault();
    let uname =e.target[0].value;
    let email = e.target[1].value;
    let pass = e.target[2].value;
    let repass = e.target[3].value;

    let jsonInput = {
      fname: uname,
      email: email,
      password: pass,
    };
    
    // if pass and repeat pass is same then call axios
    if(pass === repass){

      axios.post(`https://${ipadd.ipa}:4000/user/signup`, jsonInput).then((resp) => {
      // if Status from server return error then show msg Already exist here we write this code for Duplicate entry error
      if(resp.data.Status==="error"){ 
        notify(" Email is Already Registerd !!!");  
    
      }else if(resp.data.Status==="sucess"){
        notify(" Registration Done sucessfully !!!");  
        setFormdata({
          uname:"",
          email:"",
          pass:"",
          repass:""
        })
      }
      }).catch(error=>{
        notify(" Server error try later !!!");  

      })
    }else{
      notify(" Enter Correct password");  
    }
  };

  const notify = (show) => toast(show,{position: "top-center",});

// switch btn from signin to signup
  let switchHandler=()=>{
    setRegisterBtnSwitch(false);
  }


  return (
  <div className="signup"> 
  { registerBtnSwitch?
    <section className="vh-75" style={{ backgroundColor: "#eee" }}>
      <div className="container h-75">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body ">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-4">Register</p>

                    <form className="mx-1" onSubmit={signUpHandler}>
                      {/* <div className="d-flex flex-row align-items-center"> */}
                        <div className="form-outline flex-fill mb-4">
                          <input type="text" name="uname" id="uname"
                            className="form-control"
                            placeholder="Your Name"
                            required
                            value={formdata.uname}
                            onChange={valueHandler}
                          />
                        {/* </div> */}
                      </div>

                      {/* <div className="d-flex flex-row align-items-center"> */}
                        <div className="form-outline flex-fill mb-4">
                          <input
                            value={formdata.email}
                            onChange={valueHandler}
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Your Email"
                            required
                          />
                        {/* </div> */}
                      </div>

                      {/* <div className="d-flex flex-row align-items-center"> */}
                        <div className="form-outline flex-fill mb-4">
                          <input
                            type="password"
                            name="pass"
                            id="pass"
                            className="form-control"
                            placeholder="Password"
                            required
                            value={formdata.pass}
                            onChange={valueHandler}                          />
                        {/* </div> */}
                      </div>

                      {/* <div className="d-flex flex-row align-items-center "> */}
                        <div className="form-outline flex-fill mb-4">
                          <input
                            type="password"
                            name="repass"
                            id="repass"
                            className="form-control"
                            placeholder="Repeat your password"
                            required
                            value={formdata.repass}
                            onChange={valueHandler}
                          />
              
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                        <button type="button" className="btn btn-primary btn-lg" onClick={switchHandler}>
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>:<SignIn></SignIn>}
  </div>
  );
};
export default SignUp;
