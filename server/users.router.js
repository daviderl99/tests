const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save(err => {
    if (err){
      console.error("Error: ", err);
      res.status(500);
      return;
    }
    console.log("Successfuly saved!");
    res.status(201);
  });
});

module.exports = router;

