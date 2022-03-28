const express = require("express");
const cors = require("cors");
const adminController = require("./controller/admin.controller");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin", adminController);

module.exports = app;
