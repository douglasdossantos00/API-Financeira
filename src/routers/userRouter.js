const { Router } = require('express');

const userRouter = Router();

const userController = require('../controllers/userController');

userRouter.post('/', userController.getUserController);
userRouter.post('/ativos', userController.getAllAtivosUserController);

module.exports = userRouter;
