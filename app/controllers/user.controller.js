

class UserController{

    getUsers(req,res){
        res.send("user get all controller");
    }
    getOneUser(req,res){
        res.send("user get one controller");
    }
    createUser(req,res){
        res.send("user create controller");
    }
    updateUser(req,res){
        res.send("user update controller");
    }
    deleteUser(req,res){
        res.send("user delete controller ");
    }

}


module.exports =  new UserController();