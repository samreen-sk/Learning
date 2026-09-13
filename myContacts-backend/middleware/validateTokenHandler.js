const asynchandler = require("../utils/asynchandler");
const jwt = require("jsonwebtoken");

const validateToken = asynchandler(async (req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.status(400);
                //res.json({err});
                throw new Error("Invalid token ");

            }
            req.user = decoded.user;
            next();
        });
        if(!token){
            res.status(400);
            throw new Error("Invalid token ");
        }
    }
});

module.exports = validateToken;