const { Router } = require('express');

const ativoRouter = Router();

const ativoController = require('../controllers/ativoController');
const auth = require('../middleware/auth');

ativoRouter.get('/', auth, ativoController.getAllAtivosController);
ativoRouter.get('/users/:codCliente', auth, ativoController.getAllAtivosUserController);
ativoRouter.get('/:codAtivo', auth, ativoController.getAtivoByIdService);

module.exports = ativoRouter;
