const TaskModel = require("../models/Task");

async function getTasks() {
    const tasks = await TaskModel.find({}).exec()
    return tasks
}


module.exports = { getTasks }