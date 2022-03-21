const express =  require('express');
const app = express();
const PORT = 3000
app.use(express.json())
app.listen(PORT,(req,res)=>{
    console.log(`Server Started on Port:${PORT}`)
})

app.get('/book', (req, res)=>{
    let books = require('./book.json')
    res.send(books)
})
app.get('/book/:id', (req, res)=>{
    let id = req.params.id
    let books = require('./book.json')
    const book = books.find(o => o.id == id)
    if (book){
        return res.send(book)
    }
    return res.send('NOT FOUND')
})