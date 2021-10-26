const { Schema, model, SchemaTypes } = require('mongoose');

let teachersSchema = new Schema({
    name: String,
    phone: String,
});

let teachersModel = model('teachersModel', teachersSchema, 'teachers')

module.exports.teachersModel = teachersModel;