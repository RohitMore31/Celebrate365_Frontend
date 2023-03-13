import React from "react";
import { useSelector, useDispatch } from 'react-redux'


// NavLink 
import { Link, NavLink } from "react-router-dom";

// Icons
import { FaHome } from "react-icons/fa"
import { IoMdPersonAdd } from "react-icons/io"
import { BsCardChecklist } from "react-icons/bs"
import { MdUpdate } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { changeActiveStatus } from "../../ReduxToolkit/UserInfo/UserDetailSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  let logoutHandler =()=>{
    dispatch(changeActiveStatus(false))
  }

  return (
    <aside className="sidebar">
      {/* diifernt component linked in t form navbar */}
      <NavLink to="/"> <FaHome className="homeicons"></FaHome>Home</NavLink>
      <NavLink to="/userprofile"><CgProfile className="homeicons"></CgProfile>UserProfile</NavLink>
      <NavLink to="/addnew"><IoMdPersonAdd className="homeicons"></IoMdPersonAdd> Add New</NavLink>
      <NavLink to="/showall"><BsCardChecklist className="homeicons"> </BsCardChecklist>Show All</NavLink>
      <NavLink to="/delete"> <MdUpdate className="homeicons"></MdUpdate>Update</NavLink>
      <NavLink to="/aboutus"> <MdUpdate className="homeicons"></MdUpdate>AboutUs</NavLink>
      <button className="logoutbtn" onClick={logoutHandler}>Log Out</button>
    </aside>
  );
}
