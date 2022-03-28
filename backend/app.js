const express = require("express");
const cors = require("cors");
const adminController = require("./controller/admin.controller");
const userController = require("./controller/user.controller");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin", adminController);
app.use("/user", userController);

module.exports = app;
