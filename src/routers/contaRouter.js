const { Router } = require('express');

const contaRouter = Router();

contaRouter.post('/deposito');
contaRouter.post('/saque');

module.exports = contaRouter;
