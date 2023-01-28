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
      <h2>Upcomming..........</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* id: 1, fname: 'rohit', lname: 'more', dob: '31-01-1998' */}
          {upcomingBdayData?.map((member, index) => (
            <tr key={index}>
              <td>{member.id}</td>
              <td>{member.fname}</td>
              <td>{member.lname}</td>
              <td>{member.dob}</td>
              {/* <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
