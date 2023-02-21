import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import HomeRecent from "./HomeRecent";
import HomeUpcoming from "./HomeUpcoming";

export default function Home() {
  const [memberlist, setMemberlist] = useState(null);
  // Fetting Data from Redux Store
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  let jsonInput = {
    uid:userData.uid
  };

  React.useEffect(() => {
    // Axios 
    axios.post("http://13.235.49.69:4000/showall",jsonInput).then((response) => {
    // Getting Data from Server   
    setMemberlist(response.data);
    });
  }, []);

  return (
    <div className="homecontainer">
      <div className="hometitle"> 
        <h1>BirthDay's </h1>
        <p>Are you know bithday of your friend ? don't Worry</p>
      </div>
      {/* HomeUpcoming component */}
      <HomeUpcoming alldata={memberlist} ></HomeUpcoming>
      <hr/>
      {/* HomeRecent component */}
      <HomeRecent alldata={memberlist}></HomeRecent>
    </div>
  );
}
