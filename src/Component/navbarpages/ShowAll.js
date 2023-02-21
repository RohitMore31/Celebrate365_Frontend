import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function ShowAll() {
  const [memberlist, setMemberlist] = useState();

  // use SelectHooks
  let userData =useSelector((state)=>state.userInfo.UserInfo);
  let jsonInput = {
    uid:userData.uid
  };
 
// responsible for gettinng data from server
  function handler() {
    axios.post("http://13.235.49.69:4000/showall",jsonInput).then((response) => {
      setMemberlist(response.data);
    });}

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

