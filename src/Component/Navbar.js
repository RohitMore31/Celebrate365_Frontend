import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/Add">Add</NavLink>
    </aside>
//     <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>
  );
}
