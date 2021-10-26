const { Schema, model } = require('mongoose');

let classesSchema = new Schema({
    name: String,
    // 因为含有多个id，所以设置为数组
    teachersId: [ {
        type: Schema.Types.ObjectId,
        ref: 'teachersModel'
    } ]
});

let classesModel = model('classesModel', classesSchema, 'classes')

module.exports.classesModel = classesModel;