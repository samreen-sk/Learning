const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const mongoSchema = mongoose.Schema({
    name: {
        type : String,
        required : [true,"Enter a string for a name"]
    },
    email : {
        type : String,
        required : [true, "Enter a String for a email ID"]
    },
    number : {
        type : String,
        required : [true,"Enter a String for a phone number"]
    }
},{
    timestamps : true
});

const Contact = mongoose.model("Contact",mongoSchema)
module.exports = Contact;