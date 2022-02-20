const users = require('../bd/users');

class Sign_inController {
    setData(req,res){
        const isLogined = users.find(user => user.email === req.body.email)
        const indexUser = users.indexOf(isLogined)
        console.log(indexUser);
        if (isLogined){
            res.redirect(`users/${indexUser +1}`)
        }else {
            res.redirect('users')
        }
    }
    getData(req,res){
        res.render('sign_in');
    }   

}

module.exports = new Sign_inController;