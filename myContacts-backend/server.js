const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connection = require("./config/dbConnect");

const dotenv = require("dotenv").config();
connection();
const app = express();
app.use(express.json()); // middleware

const port = process.env.PORT || 5000;

app.use("/api/contacts",require("./routers/contactRoutes"));
app.use("/api/users",require("./routers/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`the port is running ${port}`);
});
