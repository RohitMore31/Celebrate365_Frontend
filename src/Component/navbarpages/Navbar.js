import React from "react";

// NavLink 
import { Link, NavLink } from "react-router-dom";

// Icons
import { FaHome } from "react-icons/fa"
import { IoMdPersonAdd } from "react-icons/io"
import { BsCardChecklist } from "react-icons/bs"
import { MdUpdate } from "react-icons/md"
import { CgProfile } from "react-icons/cg"

export default function Navbar() {
  return (
    <aside className="sidebar">
      {/* diifernt component linked in t form navbar */}
      <NavLink to="/"> <FaHome className="homeicons"></FaHome>Home</NavLink>
      <NavLink to="/userprofile"><CgProfile className="homeicons"></CgProfile>UserProfile</NavLink>
      <NavLink to="/addnew"><IoMdPersonAdd className="homeicons"></IoMdPersonAdd> Add New</NavLink>
      <NavLink to="/showall"><BsCardChecklist className="homeicons"> </BsCardChecklist>Show All</NavLink>
      <NavLink to="/delete"> <MdUpdate className="homeicons"></MdUpdate>Update</NavLink>
      <NavLink to="/aboutus"> <MdUpdate className="homeicons"></MdUpdate>AboutUs</NavLink>
    </aside>
  );
}
