import axios from "axios";
import React, { useState } from "react";
import Update from "./Update";
import { useSelector, useDispatch } from 'react-redux'
import { setUpdateUtility } from '../../ReduxToolkit/UserInfo/UserDetailSlice'


export default function Delete() {
  // use states 
  const [memberlist, setMemberlist] = useState(null);
  const [deleteName,setDeleteName] =useState();
  const [updateData,setUpdateData]=useState();
  const [status,setStatus]=useState(false);
  const [notFound,setNotFound]=useState(true);

  // usedispatch hook
  let dispatch = useDispatch();

  // Search Handler
  function handler() {
    let jsonInput={
      fname:deleteName,
    }
    // Axios
    axios.post("http://localhost:4000/showbyname",jsonInput).then((response) => {
      // console.log("getting response.. inside delete",response);
      if(response.data.length === 0){
        setNotFound(false);
      }else{       
      // put response data in setMemberlist
      setMemberlist(response.data);
      setNotFound(true);
      }
    });
  }

  // update handler
  let handleUpdate = (id,index) => {
    setUpdateData(memberlist[index]); 
    dispatch(setUpdateUtility(memberlist[index]));
    setStatus(true);
  }

  // Status handler
  let statusCheker =(temp)=>{
    if(!temp){
      setStatus(false);
    }
  }

  // delete handler
  let handleDelete = (id,index) => {
    setUpdateData(memberlist[id]);
    let jsonInput={
      id:id,
    }

    let memberlist1 = [...memberlist];
    memberlist1.splice(index, 1);
    setMemberlist(memberlist1);
    axios.post("http://localhost:4000/deletebyid",jsonInput).then((response) => {
    });
  };

  return (
    <div className="deletefr">
      <div className="outerform">
        <div className="form">
          {/* for searching */}
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
      {notFound?<>      
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
      </>:<h4>NotFound</h4>}
  
      {/* update component will render depemding on user click on update button */}
      {status?<Update data={updateData} handler={statusCheker} ></Update>:""}
    </div>
  );
}
