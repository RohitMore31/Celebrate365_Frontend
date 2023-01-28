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
    <div className="upcoming">
      <h2>Recently Done!!!!!</h2>
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
          {recentlyDoneData?.map((member, index) => (
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
    :<h3>No recent records</h3>
  );
}
