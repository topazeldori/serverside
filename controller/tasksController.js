const express = require('express')
const { getTasks } = require('../logic/tasks')
const TaskModel = require('../models/Task')

const router = express.Router()


router.get('/', async (req, res) => { // http://localhost:5001/tasks/ GET
    try {
        const tasks = await getTasks()
        res.status(200).json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error loading tasks")
    }
})

router.post('/', async (req, res) => { // http://localhost:5001/tasks/ ADD
    try {
        const task = req.body
        console.log("RECIEVED TASK:")
        console.log(task)
        const newTask = await new TaskModel(task).save()
        return res.status(201).json(newTask)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error saving new task")
    }
})

router.put('/', async (req, res) => { // http://localhost:5001/tasks/1kl3ntlk23 EDIT
    try {
        const task = req.body
        const updatedTask = await TaskModel.findByIdAndUpdate(task._id ?? task.id, task, { returnOriginal: false })
        return res.status(200).json(updatedTask)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error updating task")
    }
})

router.delete('/:taskId', async (req, res) => { // http://localhost:5001/tasks/ DELETE
    try {
        const removedTask = await TaskModel.findByIdAndRemove(req.params.taskId)
        return res.status(200).json(removedTask)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error removing task")
    }
})

module.exports = router