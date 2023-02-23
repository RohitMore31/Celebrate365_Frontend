import axios from 'axios'
import React, { useState } from 'react'

export default function ForgotPage() {
  const [noticeInfo,setNoticeInfo]=useState(false);
    let forgotHandler =((e)=>{
        e.preventDefault();
        let email = e.target[0].value;
        let jsonInput = {
            email: email,
          };
        // console.log(jsonInput.email);
        // Using Axios sign in user
        axios.post("http://13.235.49.69:4000/forgotpassword",jsonInput).then((resp)=>{
          if(resp.data.Status==="error"){
              alert("Not Found");
          }else if(resp.data.Status==="sucess"){
            let x = resp.data;
            setNoticeInfo(true);
            console.log(x);
          }
        })
    })

return (
<div className='signin'>
    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 vw-60">
       <p className="text-center h1 fw-bold mb-4">ForgotPassword</p>
        <form onSubmit={forgotHandler}>
          <div className="form-outline mb-4">
            <input type="email" id="email" name="email" className="form-control" placeholder='Email' required/>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>

        </form>
    </div>  
    {noticeInfo?<p>Check Your Email to Reset your Password</p>:"" }
</div>
   
  )
}

