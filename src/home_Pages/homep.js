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
  const addPerson=()=>{

  }

  return (
    <div className="homecontainer">
      <div>
        <h2>Welcome To APP</h2>
      </div>
      <button onClick={signme} className="btn">signin</button>

      <div class="sidebar">
        <div class="sidenav_item">
           <button onClick={addPerson}>Add birthday</button> 
        </div>
         {/*<div class="sidenav_item">
            Show All
        </div>
        <div class="sidenav_item">
            Remove 
        </div>
        <div class="sidenav_item">
           Recently
        </div>*/}
      </div> 
    </div>
  );
};
export default HomePage;
