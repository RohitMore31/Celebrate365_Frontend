import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [uname, Setuname] = useState("");
  const [password, Setpassword] = useState("");
  const [confpassword, Setconfpassword] = useState("");

  signUpHandler = (e) => {
    e.preventDefault();
    console.log(e);
    let uname = e.target.elements.uname.value;
    let email = e.target.elements.email.value;
    let pass = e.target.elements.pass.value;
    let rpass = e.target.elements.rpass.value;

    let jsonInput = {
      fname: uname,
      lname: lname,
      email: email,
      password: pass,
    };
    console.log(jsonInput.email);
    if(pass === rpass){
    axios.post("http://localhost:4000/Signup", jsonInput).then((resp) => {
      console.log(resp);
    });
    }
  };

  const chandleForm = (e) => {
    //Checking for password same
    if (password === confpassword) {
      console.log("true");
    } else {
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
    // <form onClick={chandleForm} classNameName="form">
    //   <div classNameName="title-form-control">
    //     <h2>Signup</h2>
    //   </div>
    //   <hr></hr>
    //   <div classNameName="form-control">
    //     <label>Email : </label>
    //     <input type="text" name="uemail" id="uemail"
    //     value={uname}
    //     onChange={(e)=>Setuname(e.target.value)}
    //     />
    //   </div>
    //   <div classNameName="form-control">
    //     <label>Password : </label>
    //     <input type="text" name="upassword" id="upassword"
    //      value={password}
    //      onChange={(e)=>Setpassword(e.target.value)}
    //      ></input>
    //   </div>
    //   <div classNameName="form-control">
    //     <label>Confirm Password : </label>
    //     <input type="text" name="confpassword" id="upassword"
    //      value={confpassword}
    //      onChange={(e)=>Setconfpassword(e.target.value)}
    //      ></input>
    //   </div>
    //   <div classNameName="form-control">
    //     <button type="submit" id="btn">
    //       submit
    //     </button>
    //   </div>
    // </form>

    <section className="vh-75" style={{ backgroundColor: "#eee" }}>
      <div className="container h-75">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body ">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-4">Sign up</p>

                    <form className="mx-1" onSubmit={signUpHandler}>
                      <div className="d-flex flex-row align-items-center">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Your Name"
                            name="uname"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Your Email"
                            name="email"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          {/* <label className="form-label" for="form3Example4c">Password</label> */}
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Password"
                            name="pass"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center ">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Repeat your password"
                            name="rpass"
                          />
                        </div>
                      </div>

                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" for="form2Example3">
                        I agree all statements in{" "}
                        <a href="#!" style={{ fontSize: "1vw" }}>
                          Terms of service
                        </a>
                      </label>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
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
    </section>
  );
};
export default SignUp;
