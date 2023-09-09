var express = require("express");
var router = express.Router();

const User = require("../models/UserSchema");

router.post("/new", async function (req, res) {
  const newUser = new User(req.body); 
  try {
    const savedUser = await newUser.save(); 
    res.send(savedUser); 
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
