const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Atlas connected successfully!");
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
        console.log(error.message);
    });