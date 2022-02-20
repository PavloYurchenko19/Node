const {Router} = require('express');

const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/',userController.renderUsers);
userRouter.post('/', userController.deleteUser);

userRouter.get('/:idUser',userController.getById);

module.exports = userRouter;