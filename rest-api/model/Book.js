const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Book = new Schema({
    name: {
        type: String
    },
    rating: {
        type: Number
    },
}, {
    collection: 'books'
})

module.exports = mongoose.model('Book', Book)