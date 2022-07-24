const { Router } = require('express');
const contaController = require('../controllers/contaController');
const auth = require('../middleware/auth');

const contaRouter = Router();

contaRouter.post('/deposito', auth, contaController.postDepositoContaController);
contaRouter.post('/saque', auth, contaController.postSaqueContaController);
contaRouter.get('/:codCliente', auth, contaController.getContaController);

module.exports = contaRouter;
