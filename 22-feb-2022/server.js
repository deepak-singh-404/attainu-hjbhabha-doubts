const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

app.get('/book', async (req, res) => {
    try {
        let data = []
        fs.readFile('books.json', 'utf-8', (err, _data) => {
            if (err) {
                throw err
            }
            data = JSON.parse(_data)
            return res.status(200).json({ success: true, count: data.length, message: "All books", response: data })
        })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message })
    }
})

app.post('/book', async (req, res) => {
    try {
        const data = req.body
        let previousData = []
        fs.readFile('books.json', 'utf-8', (err, _data) => {
            if (err) {
                throw err
            }
            previousData = JSON.parse(_data)
            previousData.push(data)
            fs.writeFile('books.json', JSON.stringify(previousData), (err) => {
                if (err) {
                    throw err
                }
                return res.status(200).json({ success: true, count: previousData.length, message: "Data added Successfully", response: previousData })
            })
        })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message })
    }
})

app.listen(3000, () => {
    console.log("SERVER STARTED")
})