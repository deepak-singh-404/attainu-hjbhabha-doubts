const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//MIDDILWARES
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
const routes = require('./route/index')

app.get('/survey', async (req, res) => {
    try {
        let folderpath = path.join(__dirname, '/view/survey.html')
        return res.sendFile(folderpath)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
})

app.use('/', routes)

mongoose.connect("mongodb://127.0.0.1:27017/data"
    , { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Database connected")
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on PORT", PORT)
})