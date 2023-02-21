import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function ShowAll() {
  const [memberlist, setMemberlist] = useState();
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  let jsonInput = {
    uid:userData.uid
  };
 

  function handler() {
    axios.post("http://localhost:4000/showall",jsonInput).then((response) => {
      console.log("getting response..", response.data);
      setMemberlist(response.data);
      console.log(memberlist);
    });}

  
  let handleDelete = (index) => {
    console.log(index);
    let memberlist1 = [...memberlist];
    memberlist1.splice(index, 1);
    console.log(memberlist1);
    setMemberlist(memberlist1);
  };

  return (
    <div className="showall">
      <h3>Friend List</h3>
      <button onClick={handler} className="btn">Show All</button>
      <div className= "container mt-3" >
      {memberlist!=null?<table className="table table-dark table-striped" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Fname</th>
              <th>Lname</th>
              <th>Bdate</th>
              
            </tr>
          </thead>
          <tbody>
            {/* id: 1, fname: 'rohit', lname: 'more', dob: '31-01-1998' */}
            {memberlist?.map((member, index) => (
              <tr key={index}>
                <td>{member.id}</td>
                <td>{member.fname}</td>
                <td>{member.lname}</td>
                <td>{member.dob}</td>
    
              </tr>
            ))}
          </tbody>
        </table>:""}
      </div>
    </div>
  );

}

