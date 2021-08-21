const express = require('express');
const router = express.Router();
const postController = require('../../controllers/post.controller');
const jwtVerfication = require('../../middlewares/jwt-verification.middleware');


module.exports = router
.get('/',jwtVerfication,(req,res)=>{
    postController.getPosts(req,res);
})
.get('/:id',jwtVerfication,(req,res)=>{
    postController.getOnePost(req,res);
})
.post('/',jwtVerfication,(req,res)=>{
    postController.createPost(req,res);
})
.patch('/:id',(req,res)=>{
    postController.createPost(req,res);
})
.delete('/:id',jwtVerfication,(req,res)=>{
    postController.deletePost(req,res);
})


