

class PostController{

    getPosts(req,res){
        return res.send('get posts');
    }

    getOnePost(req,res){
        return res.send('get one post');
    }

    createPost(req,res){
        return res.send('create post');
    }

    deletePost(req,res){
        return res.send('delete post');
    }

}

module.exports = new PostController();