import React, { useState } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import SignIn from "./SignIn";

export default function FirstPage() {
  const [signInBtnStatus, setsignInBtnStatus] = useState(true);
  let signInBtnStatusHandler =()=>{
    setsignInBtnStatus(false);
  }
  let cancelHandler = () => {
    setsignInBtnStatus(true);
  };
  return (
    <div>
      { signInBtnStatus ? <div className="firstpage">
      <div className="headercomponent">
        <button className="btn btnfont" onClick={signInBtnStatusHandler}>
          Register / SignIn
        </button>
      </div>

      <div className="centerbox">
        <div className="hometitle">
          <h1>BirthDay </h1>
          <p>Are you know bithday of your friend ? don't Worry</p>
        </div>
      </div>

      <div>
        <FooterComponent />
      </div>
    </div>:<div>
    <div className="headercomponent">
        <button className="btn btn btn-danger"  onClick={cancelHandler}>
          Cancel
        </button>
      </div>
      <SignIn/>
      </div>}

    </div>
  );
}
