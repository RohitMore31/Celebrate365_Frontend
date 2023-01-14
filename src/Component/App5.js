import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import FeactutePr from "./FeactutePr";
import Home from "./Home";
import Navbar from "./Navbar";
import NewPr from "./NewPr";
import Nomatch from "./Nomatch";
import Add from "./Add";
import Read_More from "./Read_More";
// import Navbar from "./Navbar";

export default function () {
  return (
    <div className="xyz">
      <BrowserRouter >
      <Navbar/>
        <div className="AllRoutes">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/moreabout" element={<Read_More />}></Route>
        <Route path="/add" element={<Add />}>
          <Route path="/add/feature" element={<FeactutePr />}></Route>
          <Route path="/add/new" element={<NewPr />}></Route>
        </Route>
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}
