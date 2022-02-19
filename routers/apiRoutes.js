const {Router} = require('express');

const routes = Router();

const loginRouter = require('./loginRouter')
const userRouter = require('./userRouter');
const sign_inRouter = require('./sign_inRouter');

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/sign_in', sign_inRouter);

module.exports = routes;