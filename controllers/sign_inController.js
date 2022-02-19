const users = require('../bd/users');

class Sign_inController {
    setData(req,res){
        const isLogined = users.find(req.body)
        if (
    }
}