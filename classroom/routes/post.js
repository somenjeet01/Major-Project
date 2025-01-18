const express = require("express");
const router = express.Router();



//POST
//index
router.get("/posts", (req, res) => {
  res.send("GET  for posts");
});

//show
router.get("/posts/:id", (req, res) => {
  res.send("GET for posts id");
});

//POST
router.post("/post", (req, res) => {
  res.send("POST for posts");
});

//delete
router.delete("/posts/:id", (req, res) => {
  res.send("delete for posts");
});

module.exports = router;

