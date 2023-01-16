import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ShowAll() {
      // let s =useSelector((state)=>{state.mylist})
    const[memberlist,setMemberlist]=useState();
    // direct data usestate made taklay ajun hook made nay takla

  useEffect(()=>{
    console.log("component created");
      axios.get("http://localhost:4000/showall").then((response)=>{
        console.log("getting response..",response.data)
        console.log(response.data[0].fname);
        console.log(response.data[0].lname);
        setMemberlist(response.data);
        console.log(memberlist);
    })
  },[])


  let dataintb;
  function handler(){
    console.log("inside a handler ");
    // let alldata = memberlist;
    // console.log(alldata.data.first_name);
    // dataintb = alldata.map((x)=><td>{x.first_name}</td>)
  }

  return (
    <div className='showall'>
      <h3>Friend List</h3>
      <button onClick={handler}>Show All</button>
      <div className='tableparent'>
        <table>
          <tr>
            {/* <th>No</th> */}
            <th>Name</th>
            {/* <th>LastName</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th> */}
          </tr>
          <tr>
            {dataintb}
          </tr>
        </table>
      </div>
    </div>
  )
}
