const {Router} = require('express')
const LoginController = require('../controllers/loginController');

const loginRouter = Router();

loginRouter.post('/', LoginController.setData);
loginRouter.get('/', LoginController.getData);

module.exports = loginRouter;