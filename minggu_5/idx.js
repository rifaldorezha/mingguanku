const express = require("express");
const idx = express();
const router = require("./routes");

const PORT = 3000;
idx.use(router)

//  running port
idx.listen(PORT, () => {
    console.log("running port " + PORT)
})

module.exports = express;