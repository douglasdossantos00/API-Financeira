const { Router } = require('express');

const investimentosRouter = Router();
const investimentosController = require('../controllers/ativosContaController');

investimentosRouter.post('/comprar', investimentosController.getAllAtivosContasController);
// investimentosRouter.post('/vender');

module.exports = investimentosRouter;
