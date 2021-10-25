const { Schema, model, isValidObjectId } = require('mongoose');

let studentsSchema = new Schema({
    name: String,
    age: String,
    gender: String
});

let studentsModel = model('studentsModel', studentsSchema, 'students')

module.exports.studentsModel = studentsModel;