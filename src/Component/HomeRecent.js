import React from "react";

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
      {/*<table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> */}
          {/* id: 1, fname: 'rohit', lname: 'more', dob: '31-01-1998' */}
          {recentlyDoneData?.map((member, index) => (
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
    :<h3>No recent records</h3>
  );
}