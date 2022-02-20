const {Router} = require('express');

const LoginController = require('../controllers/loginController');

const loginRouter = Router();

loginRouter.get('/', LoginController.getData);
loginRouter.post('/', LoginController.setData);

module.exports = loginRouter;