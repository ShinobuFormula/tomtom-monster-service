const express = require('express');
const { launchCapture } = require('../controller/capture');
const router = express.Router()

router.get("/capture/launch/:zone", (req, res) => {
    res.json(launchCapture(req.params.zone));
  });
module.exports = router;