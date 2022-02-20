const users = require('../bd/users');

class LoginController {
    setData(req,res){
        const isUser = users.find(user => user.email === req.body.email);
        if (!isUser){
            users.push(req.body);

            return res.redirect('users');
        }
        res.render('notFound');
    }
    getData(req,res){
        res.render('login');
    }

}

module.exports = new LoginController;