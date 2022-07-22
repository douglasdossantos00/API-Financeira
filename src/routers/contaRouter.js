const { Router } = require('express');
const contaController = require('../controllers/contaController');

const contaRouter = Router();

contaRouter.post('/deposito', contaController.postDepositoContaController);
contaRouter.post('/saque', contaController.postSaqueContaController);

module.exports = contaRouter;
