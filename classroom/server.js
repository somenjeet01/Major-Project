const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");

const sessionOptions = {
  secret: "mysupersecret",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions));
app.use(flash());
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use("/test_count", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you send a request to ${req.session.count} Times`);
// });

app.get("/register", (req, res) => {
  let { name = "Anonyomous" } = req.query;
  console.log(req.session.name);
  req.session.name = name;
  req.flash("success", "user register successfully");
  res.send(name);
});

app.get("/hello", (req, res) => {
  res.send(`hello,${req.session.name}`);
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
