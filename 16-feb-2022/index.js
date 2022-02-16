const fs = require('fs')

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.log("======SOME ERROR OCCURED: READ DATA=======")
        console.log(err)
    }
    console.log("====DATA READ SUCCESSFULLY")
    console.log(data)
    //You get data overhere, now you can perform any operation
    //convert json into javascript object
    const parsedData = JSON.parse(data)
    //Get first data and append any field
    parsedData[0]['newField'] = "dynamic data"

    //now convert jsobject into json
    const jsonData = JSON.stringify(parsedData)
    fs.writeFile('./data.json', jsonData, 'utf8', (err) => {
        if (err) {
            console.log("========SOME ERROR OCCURED: WRITE DATA====")
        }
        console.log("==========DATA HAS BEEN WRITTEN SUCCESSFULLY======")
    })
})