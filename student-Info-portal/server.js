const http = require("http");

const path = require("path");

const file = require("fs");

const port = 3001;

const server = http.createServer((req,res)=>{

    console.log("Server is connected.");

    if(req.url==="/"){

        res.setHeader("Content-Type","text/html");

        const filePath = path.join(__dirname,"public","index.html");

        file.readFile(filePath,(err,data)=>{
            if(err){
                res.statusCode = 500;
                res.end("Error File can be open");
                return;
            }
            res.end(data);
        });
    }
    else if(req.url === "/script.js"){
        
        res.setHeader("Content-Type","application/javascript");

        const filepath  = path.join(__dirname,"public","script.js");

        file.readFile(filepath,(err,data)=>{
            if(err){
                res.statusCode = 500;
                res.end("error in reading js file.");
            }
            else{
                res.end(data);
            }
        });
    }
    else{
        res.statusCode = 404;
        res.end("404 Error");
    }

});

server.listen(port, ()=>{
    console.log(`my node server is running on port ${port} .`)
});