const users = require('../bd/users')
class UserController {
    renderUsers(req,res){
        res.render('users',{users})
    }
    getById(req,res){
        const {idUser} = req.params();
        res.render(`user/${idUser}`)
    }
}

module.exports = new UserController();