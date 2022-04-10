const { MongoClient } = require("mongodb");

let db
let connectionString = `mongodb://127.0.0.1:27017/data`


const connectDb = () => {
    return new Promise(async (resolve, reject) => {
        try {
            MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                db = client.db()
                resolve(db)
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

module.exports = { connectDb, db }