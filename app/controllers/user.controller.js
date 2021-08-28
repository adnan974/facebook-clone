const User = require('../models/user.schema');

class UserController{

    async getUsers(req,res){
        try{
            let users = await User.find();
            res.json(users);
        }
        catch(err){
            res.status(400).send(err);
        }
      
    }

    async getOneUser(req,res){
        try{
            let user = await User.findById(req.params.id);
            res.json(user);
        }
        catch(err){
            res.status(400).send(err);
        }
    }

    async createUser(req,res){
        try{
            console.log(req.body);

            let user = new User(req.body);
            return user.save((err)=>{

                if(err) return res.status(400).send(err);

                return res.json({created:user});


            });
        }
        catch(err){
            return res.status(400).send(err);
        }
    }

    async updateUser(req,res){
        try{

            let user = await User.updateOne({_id:req.params.id},req.body);
            let updatedUser = await User.findById(req.params.id);

            res.json(updatedUser);
        }
        catch(err){
            console.log(err)
            res.status(400).send(err);
        }
    }

    async deleteUser(req,res){
        try{

            let deletedRes = await User.deleteOne({_id:req.params.id},req.body);

            res.json(deletedRes);
        }
        catch(err){
            console.log(err)
            res.status(400).send(err);
        }    }

}


module.exports =  new UserController();