const express = require("express");
const rout = express.Router();

const { getAllUser,
    getIdUser,
    addUser,
    deleteUser,
    updateUser }
    = require("../controllers/user.control");


rout.get('/', getAllUser)
rout.get('/:id', getIdUser)
rout.post('/', addUser)
rout.delete('/:id', deleteUser)
rout.put('/:id', updateUser)


module.exports = rout;