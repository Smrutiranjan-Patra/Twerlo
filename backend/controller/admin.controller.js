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

router.get("/", async (req, res) => {
  try {
    const createadmin = await admin.find().lean().exec();
    res.status(201).send(createadmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
