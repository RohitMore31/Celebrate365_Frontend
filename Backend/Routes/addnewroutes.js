const express = require("express");
const router = express.Router();
const db = require("../DB");

router.get("/", (req, resp) => {
  resp.send("hellow from server");
});

router.post("/addnew", (req, resp) => {
  console.log("router is called......inside addnew");
  const { fname, lname, date } = req.body;
  console.log(fname);
  const statement = `insert into bbday(fname,lname,dob) values('${fname}','${lname}','${date}')`;
  console.log(statement);
  db.execute(statement, (err, data) => {
    db.end();
    if (err) {
      console.log(err);
      resp.send("Error");
    } else resp.send("Added Sucessfully");
  });
});

module.exports = router;
