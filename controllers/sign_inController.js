const users = require('../bd/users');

class Sign_inController {
    setData(req,res){
        console.log();
        const isLogined = users.find(user => user.email === req.body.email)
        if (isLogined){
            res.redirect(`user?age=${isLogined.age}`)
        }else {
            console.log("nnnnn");
        }
    }
    getData(req,res){
        res.render('sign_in');
    }   

}

module.exports = new Sign_inController;