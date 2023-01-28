import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa"
import { IoMdPersonAdd } from "react-icons/io"
import { BsCardChecklist } from "react-icons/bs"
import { MdUpdate } from "react-icons/md"

export default function Navbar() {
  return (
    <aside className="sidebar">
      <NavLink to="/"> <FaHome className="homeicons"></FaHome>Home</NavLink>
      <NavLink to="/addnew"><IoMdPersonAdd className="homeicons"></IoMdPersonAdd> UserPRofile</NavLink>
      <NavLink to="/addnew"><IoMdPersonAdd className="homeicons"></IoMdPersonAdd> Add New</NavLink>
      <NavLink to="/showall"><BsCardChecklist className="homeicons"> </BsCardChecklist>Show All</NavLink>
      <NavLink to="/delete"> <MdUpdate className="homeicons"></MdUpdate>Update</NavLink>
      <NavLink to="/delete"> <MdUpdate className="homeicons"></MdUpdate>AboutUs</NavLink>
      <NavLink to="/delete"> <MdUpdate className="homeicons"></MdUpdate>ContactUs</NavLink>
    </aside>
  );
}
