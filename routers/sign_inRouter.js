const {Router} = require('express');

const sign_inController = require('../controllers/sign_inController');
const sign_inRouter = Router();

sign_inRouter.post('/',sign_inController.setData)
sign_inRouter.get('/',sign_inController.getData)

module.exports = sign_inRouter;
