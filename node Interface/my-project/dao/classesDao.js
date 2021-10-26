const { classesModel } = require('./models/classesModel')

module.exports.addClasses = async classes => {
    return await classesModel.create(classes);
}

module.exports.getClasses = async () => {
    return await classesModel.find();
}