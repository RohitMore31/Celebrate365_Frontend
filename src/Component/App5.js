import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./navbarpages/AddNew";
import Contact from "./navbarpages/ShowAll";
import Home from "./homepages/Home";
import Navbar from "./navbarpages/Navbar";
// import NewPr from "./NewPr";
import Nomatch from "./navbarpages/Nomatch";
// import Add from "./Delete";
// import Read_More from "./Read_More";
import AddNew from "./navbarpages/AddNew";
import ShowAll from "./navbarpages/ShowAll";
import Delete from "./navbarpages/Delete";
import UserProfile from "./profile/UserProfile";
import AboutUs from "./aboutuspages/AboutUs";
import Wish from "./Wish/Wish";

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
              {/* <Route path="/moreabout" element={<Read_More />}></Route> */}
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
