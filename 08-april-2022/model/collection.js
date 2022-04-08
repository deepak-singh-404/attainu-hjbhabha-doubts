const mongoose = require('mongoose')

const { Schema } = mongoose

const collectionSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    favoriteColor: {
        type: String,
        trim: true
    },
    favoriteFood: {
        type: String,
        trim: true
    },
    feedback: {
        type: String,
        trim: true
    }
},{ strict: false })

module.exports = mongoose.model('Collection', collectionSchema)