const express = require('express')
const dotenv = require('dotenv')
dotenv.config({})

const app = express()

app.get('/save', async(req,res)=>{
    process.env.VARIBLES_NAME = req.query.name
    return res.status(200).json({message:"saved"})
})

app.get('/', async(req, res)=>{
    return res.status(200).json({message:process.env.VARIBLES_NAME})
})

app.listen(3000,()=>{
    console.log("SERVER STARTED")
})