const users = require('../bd/users')
class UserController {
    renderUsers(req,res){
        res.render('users',{users})
    }
}

module.exports = new UserController();