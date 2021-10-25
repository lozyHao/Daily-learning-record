const { Schema, model } = require('mongoose');

let classesSchema = new Schema({
    name: String,
});

let classesModel = model('classesModel', classesSchema, 'classes')

module.exports.classesModel = classesModel;