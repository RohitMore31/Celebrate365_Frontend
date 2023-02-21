import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import HomeRecent from "./HomeRecent";
import HomeUpcoming from "./HomeUpcoming";

export default function Home() {
  const [memberlist, setMemberlist] = useState(null);
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  let jsonInput = {
    uid:userData.uid
  };
  console.log("inside home",jsonInput.uid);
  React.useEffect(() => {
    console.log("inside a handler in home Page ");
    axios.post("http://localhost:4000/showall",jsonInput).then((response) => {
      setMemberlist(response.data);
    });
  }, []);

  let x = 10;
  console.log(x);

  return (
    <div className="homecontainer">
      <div className="hometitle"> 
        <h1>BirthDay's </h1>
        <p>Are you know bithday of your friend ? don't Worry</p>
      </div>
      <HomeUpcoming alldata={memberlist} ></HomeUpcoming>
      <hr/>
      <HomeRecent alldata={memberlist}></HomeRecent>
    </div>
  );
}
