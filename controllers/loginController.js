const users = require('../bd/users');

class LoginController {
    setData(req,res){
        users.push(req.body);
    }
    getData(req,res){
        res.render('login');
    }
}

module.exports = new LoginController;