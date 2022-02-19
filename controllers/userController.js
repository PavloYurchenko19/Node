const users = require('../bd/users')
class UserController {
    renderUsers(req,res){
        res.render('users',{users})
    }
    getById(req,res){
        const {idUser} = req.params;
        const oneUser = users[idUser - 1]
        res.render(`user`,{oneUser})
    }
}

module.exports = new UserController();