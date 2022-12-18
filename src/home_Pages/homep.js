import React, { useState } from "react";
import SignupForm  from "../form/signup";



const HomePage = () => {
  const[abc, setAbc]=useState(false);
  
  const signme =()=>{
    console.log("inside fn");
    setAbc(true);
  }
  if(abc){
    return <SignupForm />
    setAbc(false);
  }

  return (
    <div className="homecontainer">
      {/* <title>
        <h2>Welcome To APP</h2>
      </title> */}
      <button onClick={signme}>signin</button>

      {/* <div class="sidebar">
        <div class="sidenav_item">
            Add birthday
        </div>
        <div class="sidenav_item">
            Show All
        </div>
        <div class="sidenav_item">
            Remove 
        </div>
        <div class="sidenav_item">
           Recently
        </div>
      </div> */}
    </div>
  );
};
export default HomePage;
