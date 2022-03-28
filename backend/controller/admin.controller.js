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
    const loginuser = await admin.find({
      email: req.body.email,
    });
    res.status(201).json(loginuser);
  } catch (err) {
    res.status(500).json(err);
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
