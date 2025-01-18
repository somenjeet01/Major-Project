const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretCode"));

//root
app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("Root working");
});




















// //signed cookies
// app.get("/getsignedcookies", (req, res) => {
//   res.cookie("Hello", "India", { signed: true });
//   res.send("signed cookies sent!");
// });

// //verify
// app.get("/verify", (req, res) => {
//   // console.log(req.cookies); //for sigened cookies
//   console.log(req.signedCookies); //for unsigned   cookie
//   res.send("verified");
// });

// app.get("/getCookies", (req, res) => {
//   res.cookie("Greeet", "Welcome");
//   res.send("sent you some cookies!");
// });

// app.get("/greet", (req, res) => {
//   let { name = "annomonous" } = req.cookies;
//   res.send(`Hi,${name}`);
// });

// app.use("/", users);
// app.use("/", posts);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
