const express = require("express");
const cors = require("cors");
const app = express();

const incidentController = require("./controller/incident.controller");
const adminController = require("./controller/admin.controller");
const userController = require("./controller/user.controller");

app.use(express.json());
app.use(cors());

app.use("/incident", incidentController);
app.use("/admin", adminController);
app.use("/user", userController);

module.exports = app;
