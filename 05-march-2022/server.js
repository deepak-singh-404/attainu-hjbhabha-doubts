const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())


// const getData = () => {
//     axios.get(" https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//         console.log(res.data)
//     }).catch((err) => {
//         console.log(err)
//     })
// }

const getData = async () => {
    try {
        const { data } = await axios({
            "method": "get",
            "url": "https://jsonplaceholder.typicode.com/todos/1"
        })
        return data
        console.log("data", data)
    }
    catch (err) {
        console.log(err.message)
    }
}




app.get('/', async(req, res) => {
    const data = await getData()
    return res.status(200).json({ 'message': data })
})



app.listen(3000, () => {
    console.log("server started")
})