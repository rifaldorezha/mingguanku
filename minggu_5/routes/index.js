const express = require("express");
const rout = express.Router();
const userRouter = require("./users.ruter")

rout.use("/users", userRouter);


module.exports = rout;