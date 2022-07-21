const { Router } = require('express');
const contaController = require('../controllers/contaController');

const contaRouter = Router();

contaRouter.post('/deposito', contaController.postContaController);
// contaRouter.post('/saque');

module.exports = contaRouter;
