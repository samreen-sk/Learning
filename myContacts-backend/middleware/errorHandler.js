const {constants} = require("../CONSTANTS");

const errorHandler = (err,req,res,next)=>{
    const code = res.statusCode ? res.statusCode : 500;
    switch (code){
        case constants.Bad_Request:
            res.json({title : "Not found", message : err.message, stackTrace : err.stack});
            break;
        case constants.Not_Found:
            res.json({title : "Validiation Error", message : err.message, stackTrace : err.stack});
            break;
        case constants.Unauthorized:
            res.json({title : "Unauthorized Error", message : err.message, stackTrace : err.stack});
            break;
        case constants.Forbidden:
            res.json({title : "Forbidden Error", message : err.message, stackTrace : err.stack});
            break;
        case constants.Internal_Server:
            res.json({title : "Internal Server Error", message : err.message, stackTrace : err.stack});
            break;
        default:
            console.log("No error All good");
            break;  
    }
    
}

module.exports = errorHandler;