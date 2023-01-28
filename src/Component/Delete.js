import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FeactutePr from "./FeactutePr";
import NewPr from "./NewPr";

export default function Delete() {
  const [memberlist, setMemberlist] = useState();
  const [deleteName,setDeleteName] =useState();

  function handler() {
    let jsonInput={
      fname:deleteName,
    }
    console.log(jsonInput.fname);
    console.log("inside a handler ");
    axios.post("http://localhost:4000/showbyname",jsonInput).then((response) => {
      console.log("getting response..", response.data);
      setMemberlist(response.data);
      console.log(memberlist);
    });
  }

  let handleDelete = (id,index) => {
    console.log("index="+id);
    let jsonInput={
      id:id,
    }
    let memberlist1 = [...memberlist];
    memberlist1.splice(index, 1);
    console.log(memberlist1);
    setMemberlist(memberlist1);
    axios.post("http://localhost:4000/deletebyid",jsonInput).then((response) => {
      console.log("getting response..", response.data);
    });
  };

  return (
    <div className="deletefr">
      <div className="outerform">
        <div className="form">
          <label for="unameslot">First Name</label>
          <br />
          <input type="text" id="uname" name="uname" onChange={(e)=>{setDeleteName(e.target.value)}}></input>
        </div>
      </div>
      <div className="">
        <button className="btn" onClick={handler}>
          Submit
        </button>
      </div>

      {/* data is comming then shwo it */}
      <div className="showall">
        <h3>Friend List</h3>
        <div className="container mt-3">
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
              {memberlist?.map((member, index) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.fname}</td>
                  <td>{member.lname}</td>
                  <td>{member.dob}</td>
                  <td>
                    <button onClick={() => handleDelete(member.id,index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
