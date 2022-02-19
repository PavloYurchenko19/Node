const users = require('../bd/users');

class LoginController {
    setData(req,res){
        users.push(req.body);
        res.redirect('users')
    }
    getData(req,res){
        res.render('login');
    }
}

module.exports = new LoginController;