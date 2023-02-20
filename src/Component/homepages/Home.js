import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import HomeRecent from "./HomeRecent";
import HomeUpcoming from "./HomeUpcoming";

export default function Home() {
  const [memberlist, setMemberlist] = useState(null);

  React.useEffect(() => {
    console.log("inside a handler in home Page ");
    axios.get("http://localhost:4000/showall").then((response) => {
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
