const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ModelSchema = new Schema({
    name: { type: String, required: true},
    dateN: {type: String, required: true},
    ativo: { type: Boolean, default: true}
})

module.exports = mongoose.model('Dados', ModelSchema)