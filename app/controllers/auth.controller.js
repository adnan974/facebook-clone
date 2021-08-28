const jwt = require('jsonwebtoken');
const configInfos = require('../../config.json')

class AuthController{

    login(req,res){
        console.log("login")
        let acessToken = jwt.sign({username:"username"},configInfos.jwt.secret_token);
        res.json({acess_token:acessToken});
    }

    register(req,res){
        res.send('post register');
    }

}

module.exports = new AuthController();