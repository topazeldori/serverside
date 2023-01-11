
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@cluster0.keznrbv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.set('strictQuery', false)

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("connected to db")
})

module.exports = db