const { Router } = require('express');

const ativoRouter = Router();

const ativoController = require('../controllers/ativoController');

ativoRouter.get('/', ativoController.getAllAtivosController);
ativoRouter.get('/user/:codCliente', ativoController.getAllAtivosUserController);
ativoRouter.get('/:codAtivo', ativoController.getAtivoByIdService);

module.exports = ativoRouter;
