const nodemailer = require("nodemailer");
const fs = require('fs');
// import * as fs from 'fs';


function sendmail(to_mail, msg) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rsmore2232@gmail.com",
      pass: "olmbarvdtvlioyci",
    },
  });
  const contents = ""+fs.readFileSync("./mail.html");

  const mailOptions = {
    from: "rsmore2232@gmail.com", // sender address
    to: to_mail, // list of receivers
    subject: msg, // Subject line
    html: contents, // plain text body
  };

  // transporter.sendMail(mailOptions, function (err, info) {
  //     callback(err, info);

  const result = {
    Status: "",
  };
 
  transporter.sendMail(mailOptions, (err, info) => {
    if (error) {
      // result["Status"] = "error";
      // result["error"] = error;
      // console.log(result);
      console.log(err);
    } else {
      // result["Status"] = "sucess";
      // result["data"] = data;
      console.log(info);
    }
  });
  result["Status"] = "sucess";
  return result;
}

module.exports = sendmail;
