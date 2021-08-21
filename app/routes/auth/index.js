const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth.controller')

const jwtVerfication = require('../../middlewares/jwt-verification.middleware');

module.exports = router
.post('/login',(req,res)=>{
    authController.login(req,res);
})

.post('/register',jwtVerfication,(req,res)=>{
    authController.register(req,res);
})