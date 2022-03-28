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
    const { email, password } = req.body;
    user.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfull", user: user });
        } else {
          res.send({ message: "Invalid Credentials" });
        }
      } else {
        res.send({ message: "Invalid Credentials" });
      }
    });
  } catch (err) {
    res.status(500).json(err);
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
