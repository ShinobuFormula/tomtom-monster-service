const { postMonsterInfo } = require("../model/monsterInfo")

const checkStats = (stats) => {
}

exports.addMonsterInfo = (body) => {
   return postMonsterInfo(body)
}
