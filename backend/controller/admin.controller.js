const express = require("express");
const router = express.Router();
const admin = require("../model/admin.model");

router.post("/", async (req, res) => {
  try {
    const createadmin = await admin.create(req.body);
    res.status(201).send(createadmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const loginuser = await admin.findOne({ email: email });
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
    const createadmin = await admin.find().lean().exec();
    res.status(201).send(createadmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
