const express = require("express");
const app = express();
const path = require("path");
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");

const sessionOptions = {
  secret: "mysupersecret",
  resave: false,
  saveUninitialized: true,
};

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
  res.locals.successfulMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

// app.use("/test_count", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you send a request to ${req.session.count} Times`);
// });

app.get("/register", (req, res) => {
  let { name = "anonyomous" } = req.query;
  req.session.name = name;
  if (name === "anonyomous") {
    req.flash("success", "user not registered successfully!");
  } else {
    req.flash("error", "user registred successfully!");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // res.send(`hello,${req.session.name}`);
  // console.log(req.flash("success"));
  res.render("page.ejs", { name: req.session.name });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
