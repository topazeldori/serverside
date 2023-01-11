

const express = require('express')
const db = require('./database')
const cors = require('cors')
const app = express()
const tasksController = require('./controller/tasksController')

app.use(express.json())
app.use(express.text())
app.use(cors())
app.use('/api/tasks',tasksController)

app.listen(5001,() => {
    console.log("listening on port 5001")
})