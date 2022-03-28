const express = require("express");
const router = express.Router();
const user = require("../model/user.model");

router.post("/", async (req, res) => {
  try {
    const createuser = await user.create(req.body);
    res.status(201).send(createuser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const loginuser = await user.findOne({ email: email });
    if (loginuser.password == password) {
      res.status(201).json("Login Successful");
    } else {
      res.status(201).json("Login Failed");
    }
  } catch (err) {
    res.status(500).json("Login Failed");
  }
});

router.get("/", async (req, res) => {
  try {
    const createuser = await user.find().lean().exec();
    res.status(201).send(createuser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
