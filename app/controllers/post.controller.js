let  Post = require('../models/post.schema');

class PostController{


    async getPosts(req,res){
        let posts = await Post.find();
        console.log(posts);
        return res.json(posts);
      
    }

    getOnePost(req,res){
        return res.send('get one post');
    }

    createPost(req,res){
        try{
            let post = new Post(req.body);
            post.save();
            res.json(post);
        }
        catch(err){

        }
        return res.send('create post');
    }

    deletePost(req,res){
        return res.send('delete post');
    }

}

module.exports = new PostController();