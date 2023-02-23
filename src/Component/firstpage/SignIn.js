import axios from 'axios';
import React, { useState } from 'react'
import SignUp from './SignUp';
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveStatus,getUserInfo } from '../../ReduxToolkit/UserInfo/UserDetailSlice'
import ForgotPage from './ForgotPage';


export default function SignIn() {
  // use state hooks
  const [registerBtnSwitch,setRegisterBtnSwitch]=useState(true);
  const [signInStatus,setsignInStatus] =useState(false)
  const [forgotbtn,setForgotbtn]=useState(true);

  let signInStatus2 = useSelector((state)=>state.userInfo.activeStatus)
  let signInStatus3 = useSelector((state)=>state.userInfo.UserInfo)

  // use dispatch hooks
  const dispatch = useDispatch();
  let signInErrorHandler = ()=>{
    setsignInStatus(true);
  }

  let registerBtnHandler = () => {
    setRegisterBtnSwitch(false);
  };

  // Sign In HAndler
  let signInHandler=(e)=>{
    e.preventDefault();
    let email = e.target[0].value;
    let pass = e.target[1].value;
    let jsonInput = {
        email: email,
        password: pass,
      };

    // Using Axios sign in user
    axios.post("http://13.235.49.69:4000/user/signin",jsonInput).then((resp)=>{
      if(resp.data.Status==="error"){
          signInErrorHandler();
      }else if(resp.data.Status==="sucess"){
        let x = resp.data;
        let obj = {
          fname:x.data[0].fname,
          email:x.data[0].email,
          uid:x.data[0].uid,
          lname:x.data[0].lname,
          dob:x.data[0].dob,
          country:x.data[0].country,
          state:x.data[0].state,
          mobile:x.data[0].mobile,
          address:x.data[0].address
        }
        // console.log(obj);
         // setting redux values ito redux store 
        dispatch(getUserInfo(obj));
        // setting active status into redux store
        dispatch(changeActiveStatus()); 
      }
    })
  }

  let forgotbtnhandler =()=>{
    setForgotbtn(false);
  }
  

  return (
<>
{forgotbtn?   
<div className='signin'>
  {registerBtnSwitch ?   
  <section className="vh-75" style={{ backgroundColor: "#eee"}}>
    <div className="container h-75">
      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
       <p className="text-center h1 fw-bold mb-4">SignIn</p>
        <form onSubmit={signInHandler}>
          <div className="form-outline mb-4">
            <input type="email" id="email" name="email" className="form-control" placeholder='Email' required/>
            {/* <label className="form-label" for="form2Example1">Email address</label> */}
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="password" name="password" className="form-control" placeholder='Password' required/>
            {/* <label className="form-label" for="form2Example2">Password</label>  */}
          </div>

          <div className="row mb-4">
            <div className="col">
             <a href="#" onClick={forgotbtnhandler}> Forgot password? </a>
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
  </div>:<ForgotPage />} 

</>
  )
}
