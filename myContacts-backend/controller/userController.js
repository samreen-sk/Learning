const asynchandler = require("../utils/asynchandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const userRegistration = asynchandler(async (req,res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const containsEmail = await User.findOne({email});
    if(containsEmail){
        res.status(400);
        throw new Error("This email id is already registered");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);
    const user = await User.create({
        username,
        email,
        password : hashedPassword
    });

    if(user){
        res.status(201);
        res.json({id : user._id, name : user.email, username : user.username});
    }
    else{
        res.status(400);
        throw new error("The user is not valid");
    }

});

const userLogin = asynchandler(async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(200);
        throw new Error("All fields are manditory.");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = await jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                id : user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn : "7d"}
    );
    res.status(201);
    res.json({accessToken});
    }
    else{
        res.status(400);
        throw new Error("invalid Email or password");
    }

});

const userCurrent = asynchandler(async (req,res)=>{
    res.json(req.user);
});

module.exports = {userRegistration,userLogin,userCurrent};