import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ShowAll() {
      // let s =useSelector((state)=>{return state.mylist})
      let d = useDispatch()    
      const[memberlist,setMemberlist]=useState();
      const[dataintb,setDataintb]=useState("");
      let data1 = memberlist;
      d({type:"add"},{data:data1});
      // console.log(memberlist);
      // console.log(s);

  useEffect(()=>{
    console.log("component created");
      axios.get("http://localhost:4000/showall").then((response)=>{
        console.log("getting response..",response.data)
        console.log(response.data[0].fname);
        console.log(response.data[0].lname);
        setMemberlist(response.data);
      })
    },[])
  // let dataintb;
  function handler(){
    console.log("inside a handler ");
    let alldata = memberlist;
    // console.log(alldata.data.first_name);
   let dataintb1 = alldata.map((x)=>(<td>{x.fname}</td>))
    setDataintb(dataintb1)
   
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
