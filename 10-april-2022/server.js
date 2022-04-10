const express = require('express');
const path = require('path');
const {connectDb} = require('./db/index')


//MIDDILWARES
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try{
        console.log("===SERVER STARTED ON PORT===", PORT)
        await connectDb()
        console.log("===DATABASE CONNECTED====")

    }
    catch(err){
        console.log('===ERROR OCCURED===')
        console.log(err.message)
    }
})

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

