const {Router} = require('express');

const routes = Router();

const userRouter = require('./userRouter');

routes.use('/users', userRouter);

module.exports = routes;