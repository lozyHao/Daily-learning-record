const { Schema, model, SchemaTypes } = require('mongoose');

let studentsSchema = new Schema({
    name: String,
    age: String,
    gender: String,
    // 对外关联班级集合classes的_id字段
    classId: {
        type: Schema.Types.ObjectId, //MongoDB独有的字段使用
        ref: 'classesModel' //关联集合的模型名称
    },
});

let studentsModel = model('studentsModel', studentsSchema, 'students')

module.exports.studentsModel = studentsModel;