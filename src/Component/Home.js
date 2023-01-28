import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import HomeRecent from "./HomeRecent";
import HomeUpcoming from "./HomeUpcoming";

export default function Home() {
  const [memberlist, setMemberlist] = useState(null);
  const [upcoming, setUpcoming] = useState();
  const [recently, setRecently] = useState();

  React.useEffect(() => {
    console.log("inside a handler in home Page ");
    axios.get("http://localhost:4000/showall").then((response) => {
      setMemberlist(response.data);
      console.log("completeddddddd");
    });
  }, []);
  // console.log(memberlist);
  let x = 10;
  console.log(x);


  

  return (
    <div className="homecontainer">
      <HomeUpcoming alldata={memberlist}></HomeUpcoming>
      <HomeRecent alldata={memberlist}></HomeRecent>
    </div>
  );
}
