const mongoose = require('mongoose')
const {Schema} = require('mongoose')


const TaskScheme = new Schema({
    completed: {
        type: Boolean,
        required: true,
        defaultValue: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }
}, {versionKey: false})

const TaskModel = mongoose.model('TaskModel', TaskScheme, 'tasks')

module.exports = TaskModel