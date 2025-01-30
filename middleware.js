module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.user);
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in to create lisings");
    return res.redirect("/login");
  } else {
    next();
  }
};
