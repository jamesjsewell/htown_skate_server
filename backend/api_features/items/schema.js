const mongoose = require("mongoose")

// mongoose schema class
const Schema = mongoose.Schema

// instance of mongoose Schema class 
var Item = new Schema({
    title: { type: String },
    subtitle: { type: String },
    description: { type: String }
}, { collection: 'spots', timestamps: true })

// exports mongoose model to the itemController.js file
module.exports = mongoose.model("Item", Item)