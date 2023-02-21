import React from "react";

// Browser Router Route and Routes for routing 
import { BrowserRouter, Route, Routes } from "react-router-dom";

// differnt component  import
import Home from "./homepages/Home";
import Navbar from "./navbarpages/Navbar";
import Nomatch from "./navbarpages/Nomatch";
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

              {/* configuring path with component */}
              
              <Route path="/" element={<Home />}></Route>
              <Route path="/addnew" element={<AddNew />}></Route>
              <Route path="/showall" element={<ShowAll />}></Route>
              <Route path="/userprofile" element={<UserProfile />}></Route>
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
