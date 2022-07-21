const { Router } = require('express');

const ativoRouter = Router();

const ativoController = require('../controllers/ativoController');

ativoRouter.get('/', ativoController.getAllAtivosController);
ativoRouter.get('/:codCliente');
ativoRouter.get('/:codAtivo');

module.exports = ativoRouter;
