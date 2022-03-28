const express = require("express");
const router = express.Router();
const incident = require("../model/incident.model");
const user = require("../model/user.model");

router.post("/", async (req, res) => {
  try {
    const createincident = await incident.create(req.body);
    res.status(201).send(createincident);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const getincident = await incident.find().lean().exec();
    res.status(201).send(getincident);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
