import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addnew">Add New</NavLink>
      <NavLink to="/showall">Show All</NavLink>
      <NavLink to="/delete">Delete </NavLink>
    </aside>
//     <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>
  );
}
