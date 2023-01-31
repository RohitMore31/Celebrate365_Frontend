import React from "react";

export default function HomeUpcoming(props) {
  /* id: 1, fname: 'rohit', lname: 'more', dob: '1998-01-31' */
  let y = props.alldata;
  var upcomingBdayData;

  if (y != null) {
    upcomingBdayData = y.filter((x) => {
      let d = new Date(x.dob);
      let src = d.getMonth() + 1;
      let c = new Date();
      let tar = c.getMonth() + 1;
      if (tar === src) {
        console.log("upcomming birhday");
        return x;
      }
    });
    console.log(upcomingBdayData);
  }
  return (
    <div className="container">
      <h2>Upcomming.....</h2>
      {/* <table classNameName="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>bday</th>
          </tr>
        </thead>
        <tbody> */}
          {/* id: 1, fname: 'rohit', lname: 'more', dob: '31-01-1998' */}
          {upcomingBdayData?.map((member, index) => (
            // <tr key={index}>
            //   <td>{member.id}</td>
            //   <td>{member.fname}</td>
            //   <td>{member.lname}</td>
            //   <td>{member.dob}</td>
            // </tr>
            <div className="mycontainer">
              <div className="imgbox">
                <img src="https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M="></img>
              </div>
              <div className="nonimgbox">
                <div className="fullname">
                  <div className="firstnamebox">{member.fname}</div>
                  <div className="lastnamebox">{member.lname}</div>
                </div>
                {/* <div className="emailbox">abc@xyz.com</div> */}
                <div className="datebox">{member.dob}</div>
              </div>
            </div>
          ))}
        {/* </tbody>
      </table> */}
    </div>
  );
}
