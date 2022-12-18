import React from "react";
// import { useState } from "react";

const HomePage = () => {
  return (
    <div className="Home">
      <title>
        <h2>Welcome To APp</h2>
      </title>
      <div class="sidebar">
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
          {/* <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a> */}
        
      </div>
    </div>
  );
};
export default HomePage;
