const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username :{
        type : String,
        require : [true, "adding username is mandatory"]
    },

    email : {
        type : String,
        require : [true, "adding email id is mandatory"],
        unique : [true, "unique email id is required"]
    },

    password : {
        type : String,
        require : [true, "Enter a password nd it is mandatory."]
    }
},{
    timestamps : true
});

const User = mongoose.model("User", userSchema);
module.exports = User;