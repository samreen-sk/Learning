const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const dotenv = require("dotenv").config();

const app = express();
app.use(express.json()); // middleware

const port = process.env.PORT || 5000;

app.use("/api/contacts",require("./routers/contactRoutes"));

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`the port is running ${port}`);
});
