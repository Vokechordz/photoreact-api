const mongoose= require('mongoose')

const photoSchema= new mongoose.Schema({
    key: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    }
})


module.exports= mongoose.model('Photo', photoSchema)