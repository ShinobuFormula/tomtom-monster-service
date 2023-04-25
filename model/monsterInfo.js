const mongoose = require('mongoose')

const monsterInfoSchema = new mongoose.Schema({
    name: String,
    typeID: {},
    passifID: [],
    traitID: Number,
    stats: {}
})

const monsterInfoModel = mongoose.model('MonsterInfo', monsterInfoSchema)

exports.getAllMonsterInfos = async () => {
    const monsters = await monsterInfoModel.find();
    return monsters
}

exports.postMonsterInfo = (monsterInfo) => {
    const monster = new monsterInfoModel(monsterInfo);
    return monster.save()
};

exports.updateMonsterInfo = async (id ,body) => {
    const monster = await monsterInfoModel.findOneAndUpdate({_id: id}, body, {
        new: true
    });
    monster.save();
}