const { Router } = require('express');

const ativoRouter = Router();

const ativoController = require('../controllers/ativoController');

ativoRouter.get('/', ativoController.getAllAtivosController);
ativoRouter.get('/users/:codCliente', ativoController.getAllAtivosUserController);
ativoRouter.get('/:codAtivo', ativoController.getAtivoByIdService);

module.exports = ativoRouter;
