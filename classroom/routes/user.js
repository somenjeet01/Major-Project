
const express = require("express");
const router = express.Router();

//index POST
router.get("/user", (req, res) => {
  res.send("GET  for user");
});

//show POST
router.get("/user/:id", (req, res) => {
  res.send("GET for user id");
});

//POST-POST
router.post("/user", (req, res) => {
  res.send("POST for user");
});

//delete POST
router.delete("/user/:id", (req, res) => {
  res.send("Delete for User");
});


module.exports = router;