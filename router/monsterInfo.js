const express = require('express');
const router = express.Router()
const { addMonsterInfo, addAffinity, queryAllAffinities, queryMonsterInfos, queryAllTypes, queryEffectiveness } = require('../controller/monsterInfo');

router.get("/", async (req, res) => {
    res.json(await queryAllMonsterInfos())
})

router.post("/", async (req, res) => {
    res.json(await addMonsterInfo(req.body))
})

router.get("/affinity", async (req, res) => {
    res.json(await queryAllAffinities())
})

router.post("/affinity", async (req, res) => {
    res.json(await addAffinity(req.body))
})

router.get("/affinity/:attackType/:defenseType", async (req, res) => {
    res.json(await queryEffectiveness(req.params.attackType, req.params.defenseType))
})

router.get("/type", async (req, res) => {
    res.json(await queryAllTypes())
})

module.exports = router;