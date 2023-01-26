import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [memberlist, setMemberlist] = useState([]);
  const [upcoming, setUpcoming] = useState();
  const [recently, setRecently] = useState();
  let x = useRef(1);
  // if (x == 1) 
  // {
  //   console.log("inside a handler in home Page ");
  //   axios.get("http://localhost:4000/showall").then((response) => {
  //     console.log("getting response..", response.data);
  //     setMemberlist(response.data);
  //     console.log(memberlist);
  //   });
    // x.current++;
  // }
    useEffect(()=>{
      console.log("called once");
    },[])
    

  /* id: 1, fname: 'rohit', lname: 'more', dob: '1998-01-31' */
  // let upcomingBdayData = memberlist.filter((x) => {
  //   let d = new Date(x.dob);
  //   console.log(d.getMonth());
  //   let d2 = d.getMonth() + 1;
  //   // let d2 = 1
  //   let c = new Date();
  //   let c2 = c.getMonth() + 1;
  //   // let c2 =2;
  //   if (d2 == c2) {
  //     console.log("upcomming birhday");
  //     return x;
  //   }
  // });
  // setUpcoming(upcomingBdayData);

  // let recentlyDoneData = memberlist.filter((x) => {
  //   let d = new Date(x.dob);
  //   console.log(d.getMonth());
  //   let d2 = d.getMonth() + 1;
  //   // let d2 = 1
  //   let c = new Date();
  //   let c2 = c.getMonth() + 1;
  //   // let c2 =2;
  //   if (c2 - d2 == 1) {
  //     console.log("recenty done birhday");
  //   } else if (c2 == 1 && d2 == 12) {
  //     console.log("recenty done birhday");
  //   }
  // });
  // setRecently(recentlyDoneData);

  return (
    <div className="homecontainer">
      <h2>Upcomming..........</h2>
      <div className="upcoming">
        <table>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Date</th>
          </tr>
          <tr>{}</tr>
        </table>
      </div>
      <h2>......Recent</h2>
      <div className="upcoming"></div>
    </div>
  );
}
