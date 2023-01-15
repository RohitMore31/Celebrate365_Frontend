import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./AddNew";
import Contact from "./ShowAll";
import FeactutePr from "./FeactutePr";
import Home from "./Home";
import Navbar from "./Navbar";
import NewPr from "./NewPr";
import Nomatch from "./Nomatch";
import Add from "./Delete";
import Read_More from "./Read_More";
import AddNew from "./AddNew";
import ShowAll from "./ShowAll";
import Delete from "./Delete";
import { Provider } from "react-redux";
import store from "./MyStore";
// import Navbar from "./Navbar";

export default function () {
  return (
    <div className="leftside">
      <BrowserRouter>
        <Navbar />
        <div className="AllRoutes">
          <Routes>
            <Provider store={store}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/addnew" element={<AddNew />}></Route>
              <Route path="/showall" element={<ShowAll />}></Route>
              <Route path="/moreabout" element={<Read_More />}></Route>
              <Route path="/delete" element={<Delete />}>
                {/* <Route path="/add/feature" element={<FeactutePr />}></Route>
              <Route path="/add/new" element={<NewPr />}></Route> */}
              </Route>
              <Route path="*" element={<Nomatch />}></Route>
            </Provider>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
