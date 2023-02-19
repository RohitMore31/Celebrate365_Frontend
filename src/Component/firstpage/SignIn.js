import axios from 'axios';
import React, { useState } from 'react'
import SignUp from './SignUp';
import { useSelector, useDispatch } from 'react-redux'
import { increment,changeActiveStatus,getUserInfo } from '../../ReduxToolkit/UserInfo/UserDetailSlice'


export default function SignIn() {
  const [registerBtnSwitch,setRegisterBtnSwitch]=useState(true);
  const [signInStatus,setsignInStatus] =useState(false)

  let signInStatus2 = useSelector((state)=>state.userInfo.activeStatus)
  console.log("inside a signIn.js" ,signInStatus2);

  let signInStatus3 = useSelector((state)=>state.userInfo.UserInfo)
  console.log("inside a signIn.js" ,signInStatus3);

  const dispatch = useDispatch();
  let signInErrorHandler = ()=>{
    setsignInStatus(true);
  }

  let registerBtnHandler = () => {
    setRegisterBtnSwitch(false);
  };

    let signInHandler=(e)=>{
        e.preventDefault();
        // console.log(e);
        let email = e.target[0].value;
        let pass = e.target[1].value;
        let jsonInput = {
          email: email,
          password: pass,
        };
        console.log(jsonInput.email);
        axios.post("http://localhost:4000/user/signin",jsonInput).then((resp)=>{
          console.log(resp);
          if(resp.data.Status==="error"){
            console.log("inside error");
            signInErrorHandler();
          }else if(resp.data.Status==="sucess"){
            console.log("inside sucess ",resp.data);
            let x = resp.data;
            let obj = {
              fname:x.data[0].fname,
              email:x.data[0].email,
              uid:x.data[0].uid,
            }
            // console.log(obj);

            dispatch(getUserInfo(obj));

            dispatch(changeActiveStatus()); 
          }
        })
      }

  return (
<div className='signin'>
  {registerBtnSwitch ?   
  <section className="vh-75" style={{ backgroundColor: "#eee"}}>
    <div className="container h-75">
      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
       <p className="text-center h1 fw-bold mb-4">SignIn</p>
        <form onSubmit={signInHandler}>
          <div className="form-outline mb-4">
            <input type="email" id="email" name="email" className="form-control" placeholder='Email'/>
            {/* <label className="form-label" for="form2Example1">Email address</label> */}
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="password" name="password" className="form-control" placeholder='Password' />
            {/* <label className="form-label" for="form2Example2">Password</label>  */}
          </div>

          <div className="row mb-4">
            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

          <div className="text-center"> 
            <p>Not a member ? <button className="btn m-0 pl-1 text-dark" onClick={registerBtnHandler}> Register </button></p>
          </div> 
        </form>
        </div>  
      </div>
      {signInStatus ? <div>Something Wrong try again</div>:""}
    </section>: <>
    <SignUp/>
    </>}    
  </div> 

  )
}
