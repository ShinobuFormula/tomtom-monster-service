const { postAffinity, getAllAffinities, getEffectiveness } = require("../model/affinity")
const { postMonsterInfo, getAllMonsterInfos } = require("../model/monsterInfo")
const { getAllTypes } = require("../model/type")

const checkStats = (stats) => {
}

exports.addMonsterInfo = (body) => {
   return postMonsterInfo(body)
}

exports.addAffinity = (body) => {
   return postAffinity(body)
}

exports.queryAllMonsterInfos = async () => {
   return await getAllMonsterInfos()
}

exports.queryAllAffinities = async () => {
   return await getAllAffinities()
}

exports.queryEffectiveness = async (attackType, defenseType) => {
   return await getEffectiveness(attackType, defenseType)
}

exports.queryAllTypes = async () => {
   return await getAllTypes()
}