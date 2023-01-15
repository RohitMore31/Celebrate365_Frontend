import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ShowAll() {
      let s =useSelector((state)=>{state.mylist})
    const[memberlist,setMemberlist]=useState();
    // direct data usestate made taklay ajun hook made nay takla

  useEffect(()=>{
      axios.get("localhost:4000/product").then((response)=>{
        console.log("getting response..",response.data)
       setMemberlist(response.data)         
    })
  },[])

//   useEffect(()=>{
//     axios.get("./shopstock.json")
//     .then((response)=>{
//         console.log("getting response..",response.data)
//        setAI(response.data)         
//     })
// },[])

  function handler(){

  }

  return (
    <div className='showall'>
      <h3>Friend List</h3>
      <button onClick={handler}>Show All</button>
      <div className='tableparent'>
        <table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            {}
          </tr>
        </table>
      </div>
    </div>
  )
}
