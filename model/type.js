const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
    name: String,
})

const typeModel = mongoose.model('types', typeSchema)

exports.getAllTypes = async () => {
    const types = await typeModel.find();
    return types
}