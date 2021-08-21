const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user.controller');
const jwtVerification = require('../../middlewares/jwt-verification.middleware');


module.exports = router
.get('/',jwtVerification,(req,res)=>{
    UserController.getUsers(req,res)
})
.get('/:id',jwtVerification,(req,res)=>{
    UserController.getOneUser(req,res)
})
.post('/',jwtVerification,(req,res)=>{
    UserController.createUser(req,res)
})
.patch('/:id',jwtVerification,(req,res)=>{
    UserController.updateUser(req,res)
})
.delete('/:id',jwtVerification,(req,res)=>{
    UserController.deleteUser(req,res)
})

