const express = require('express');
const router = express.Router()
const { launchCapture } = require('../controller/capture');
const { addMonsterInfo } = require('../controller/monsterInfo');
const {getAll} = require("../model/monsterInfo")

router.get("/capture/launch/:zone", (req, res) => {
    res.json(launchCapture(req.params.zone));
});


router.get("/", (req, res) => {
    res.json(getAll())
})


router.post("/", (req, res) => {
    res.json(addMonsterInfo(req.body))
})
module.exports = router;