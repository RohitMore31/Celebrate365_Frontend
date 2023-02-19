import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./AddNew";
import Contact from "./ShowAll";
import Home from "./Home";
import Navbar from "./Navbar";
// import NewPr from "./NewPr";
import Nomatch from "./Nomatch";
// import Add from "./Delete";
import Read_More from "./Read_More";
import AddNew from "./AddNew";
import ShowAll from "./ShowAll";
import Delete from "./Delete";
import UserProfile from "./profile/UserProfile";
import AboutUs from "./AboutUs";
import Wish from "./Wish";

export default function () {
  return (
    <div className="leftside">
        <BrowserRouter>
          <Navbar />
          <div className="AllRoutes">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/addnew" element={<AddNew />}></Route>
              <Route path="/showall" element={<ShowAll />}></Route>
              <Route path="/userprofile" element={<UserProfile />}></Route>
              <Route path="/moreabout" element={<Read_More />}></Route>
              <Route path="/delete" element={<Delete />}></Route>
              <Route path="/aboutus" element={<AboutUs />}></Route>
              <Route path="wishbday" element={<Wish />}></Route>
              <Route path="*" element={<Nomatch />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}
