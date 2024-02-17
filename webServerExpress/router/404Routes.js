const express = require("express");

const router = express.Router();

router.use((req, res) => {

    res.status(404).send("Girdiğiniz sayfa bulunamadi")
})

module.exports = router;