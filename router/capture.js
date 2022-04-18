const express = require('express');
const router = express.Router()
const { launchCapture } = require('../controller/capture');

router.post("/launch/:zone", (req, res) => {
    res.json(launchCapture(req.params.zone));
})


router.post("/", (req, res) => {
    res.send("capture monster")
   // res.json(captureMonster(req.body));
})

module.exports = router;