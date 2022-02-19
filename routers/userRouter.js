const {Router} = require('express')
const userController = require('../controllers/userController')

const userRouter = Router();

userRouter.get('/',userController.renderUsers);
userRouter.get('/user/:idUser',userController.getById);

module.exports = userRouter;