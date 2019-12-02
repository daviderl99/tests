const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

router.post("/", async (req, res) => {
  const filter = {personalCode: req.body.personalCode};
  const  doc = req.body;
  const options = {
    upsert: true
  };
  const {n, nModified} = await User.updateOne(filter, doc, options);
    console.log("New:", n);
    console.log("Updated:", nModified);
    res.send(200);
});

router.get("/onlineCount", (req, res) => {
  res.send({
    onlineCount: Math.round(Math.random(0, 100) * 100)
  });
});

module.exports = router;