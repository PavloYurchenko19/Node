const {Router} = require('express')
const userController = require('../controllers/userController')
const users = require('../bd/users')

const userRouter = Router();

userRouter.get('/',userController.renderUsers);

module.exports = userRouter;