import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs"

export default function HomeRecent(props) {
  var recentlyDoneData =null;

  if (props.alldata != null) {
    recentlyDoneData = props.alldata.filter((x) => {
      let d = new Date(x.dob);
      let src = d.getMonth() + 1;
      let c = new Date();
      let trg = c.getMonth() + 1;
      if (trg - src == 1) {
        return x;
      } else if (trg == 1 && src == 12) {
        return x;
      }
    });
  }

  return (
    recentlyDoneData!=0?
    <div className="container">
       <h2>Recently Done!!!!!</h2>
    
          {recentlyDoneData?.map((member, index) => (
      
            <div className="mycontainer">
              <div className="imgbox">
                {/* <img src="https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M="></img> */}
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjuPIcmTSPT1I9kS6f-FpYzSRjfVkK_gVYQ&usqp=CAU"></img> */}
               <BsFillPersonCheckFill className=""></BsFillPersonCheckFill> 
              </div>
              <div className="nonimgbox">
                <div className="fullname">
                  <div className="firstnamebox">{member.fname } { member.lname}</div>
                </div>
                
                <div className="datebox">
                  {member.dob}
                </div>
              </div>
            </div>
          ))}
     
    </div>
    :<h3>No recent records</h3>
  );
}
