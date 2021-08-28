const jwt = require('jsonwebtoken');
const configInfos = require('../../config.json')

module.exports = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader;
    
    if(!token) return res.sendStatus(401);


    jwt.verify(token,configInfos.jwt.secret_token,(err,user)=>{

        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });

}