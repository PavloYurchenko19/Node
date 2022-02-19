const {Router} = require('express');

const routes = Router();

const loginRouter = require('./loginRouter')
const userRouter = require('./userRouter');

routes.use('/users', userRouter);
routes.use('/login', loginRouter);

module.exports = routes;