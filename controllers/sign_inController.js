const users = require('../bd/users');

class Sign_inController {
    setData(req,res){
        console.log();
        const isLogined = users.find(user => user.email === req.body.email)
        let oneUser = isLogined
        console.log(oneUser);
        if (isLogined){
            res.redirect({oneUser},`user`)
        }else {
            res.redirect('users')
        }
    }
    getData(req,res){
        res.render('sign_in');
    }   

}

module.exports = new Sign_inController;