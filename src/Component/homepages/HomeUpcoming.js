import React, { useEffect, useState } from "react";
import { TfiEmail } from "react-icons/tfi"
import { useNavigate } from 'react-router-dom'

export default function HomeUpcoming(props) {
  let y = props.alldata;
  
  var upcomingBdayData ;
    if (Array.isArray(y)) {
      // console.log("inside a home if ",y);
      // let Data =  y.filter((x) => {
        upcomingBdayData =  y.filter((x) => {
        let d = new Date(x.dob);
        let src = d.getMonth() + 1;
        let c = new Date();
        let tar = c.getMonth() + 1;
        if (tar === src && (c.getDate() < d.getDate())) {
          // console.log("upcomming birhday");
          return x;
        }
      });
     
    }

  // use Navigate hooks to navigate to wish page
  const Navigate=useNavigate();
  let wishPageHandler =(index)=>{
    Navigate('wishbday',{
      state: {
          name: 'Programming Fields',
          message: 'Message from home component',
          mydata:upcomingBdayData[index]
      },
    })
  }


  return (
    <div className="container">
      <h2>Upcomming.....</h2>
        {/* rendering data using map */}
          {/* {upcomingBdayData?.map((member, index) => ( */}
          { Array.isArray(upcomingBdayData)?upcomingBdayData.map((member, index) => (
         
            <div className="mycontainer">
              <div className="imgbox">
                {/* <img src="https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M="></img> */}
                <img src="https://media.tenor.com/M-34lT1ySIIAAAAM/hb.gif"></img>
              </div>
              <div className="nonimgbox">
                <div className="fullname">
                  <div className="firstnamebox">{member.fname } {member.lname}</div>
                </div>
                <div className="datebox">
                  {member.dob}
                </div>
                <div className="datebox">
                  <button class="mybutton"onClick={ ()=>wishPageHandler(index) }>Wish <TfiEmail className="homeicons"></TfiEmail></button>
                </div>
              </div>
            </div>
          )):""}
        </div>
      );
}
