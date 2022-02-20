const users = require('../bd/users');

class UserController {
    renderUsers(req,res){
        res.render('users', {users});
    }
    getById(req,res){
        const {idUser} = req.params;
        let oneUser = users[idUser - 1];
        res.render('user', {oneUser});
    }
    deleteUser(req,res){
        users.splice(req.params,1);
        res.redirect('users');
    }
}

module.exports = new UserController();