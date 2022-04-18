const mongoose = require('mongoose')

const affinitySchema = new mongoose.Schema({
    attack: String,
    defense: String,
    effectiveness: Number,
})

const affinityModel = mongoose.model('affinities', affinitySchema)

exports.getAllAffinities = async () => {
    const affinities = await affinityModel.find();
    return affinities
}

exports.postAffinity = (body) => {
    const affinity = new affinityModel(body);
    return affinity.save()
};

exports.updateAffinity = async (id ,body) => {
    const affinity = await affinityModel.findOneAndUpdate({_id: id}, body, {
        new: true
    });
    affinity.save();
}

exports.getEffectiveness = async (attackType, defenseType) => {
    const affinity = await affinityModel.findOne( {attack: attackType, defense: defenseType})
    return affinity
}