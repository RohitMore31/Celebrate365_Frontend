import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Update from "./Update";
import { useSelector, useDispatch } from 'react-redux'
import { increment,changeActiveStatus,getUserInfo,setUpdateUtility } from '../../ReduxToolkit/UserInfo/UserDetailSlice'


export default function Delete() {
  const [memberlist, setMemberlist] = useState(null);
  const [deleteName,setDeleteName] =useState();
  const [updateData,setUpdateData]=useState();
  const [status,setStatus]=useState(false);

  let dispatch = useDispatch();
  // Search Handler
  function handler() {
    let jsonInput={
      fname:deleteName,
    }
    console.log(jsonInput.fname);
    console.log("inside a handler ");
    axios.post("http://localhost:4000/showbyname",jsonInput).then((response) => {
      console.log("getting response..", response.data);
      // put response data in setMemberlist
      setMemberlist(response.data);
      console.log(memberlist);
    });
  }

  let handleUpdate = (id,index) => {
    console.log("index="+index);
    console.log(memberlist[index]);
    setUpdateData(memberlist[index]); 
    dispatch(setUpdateUtility(memberlist[index]));
    setStatus(true);
    
  }
  let statusCheker =(temp)=>{
    console.log("temp values in side parent="+temp);
    if(!temp){
      setStatus(false);
    }
  }

  let handleDelete = (id,index) => {
    console.log("index="+id);
    console.log(memberlist[id]);
    setUpdateData(memberlist[id]);
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
      {memberlist!=null?<div className="deleteById">
        <h3>Friend List</h3>
        <div className="container mt-3">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Dob</th>
                <th>Delete</th>
                <th>update</th>
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
                    <button onClick={() => handleDelete(member.id,index)} className="btn">Delete</button>
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(member.id,index)} className="btn">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>:""}
      {status?<Update data={updateData} handler={statusCheker} ></Update>:""}
    </div>
  );
}
