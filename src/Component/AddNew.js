import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddNew() {
  const navigate = useNavigate();
  return (
    // <>
    // <div>About</div>
    // <button onClick={()=>navigate('/moreabout')}>Read_More_About</button>
    // </>
    <div className="addnew">
      <div className="slot">
        <label for="uname">First Name</label>
        <input type="text" id="uname" name="uname"></input>
      </div>
      <div className="slot">
        <label for="lname">Last Name </label>
        <input type="text" id="lname" name="lname"></input>
      </div>
      <div className="slot">
        <label for="date">Birth Date</label>
        <input type="date" id="date" name="date"></input>
      </div>
      <div className="slot">
        <button className="addnewbtn">Submit</button>
      </div>
    </div>
  );
}
