const jwt = require("jsonwebtoken");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.TOKEN;
const header = jwt.decode(token, { complete: true }).header;

var cert = fs.readFileSync("./public.pem");
jwt.verify(token, cert, function (err, result) {
  if (err) {
    console.log("Token Not Verified, Mismatch or Wrong Token");
    return;
  }
  console.log(result);
  // console.log("Token Successfully Verified");
});
