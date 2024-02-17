const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("Anasayfaya girildi");
    res.send("Index sayfası")


})

module.exports = router