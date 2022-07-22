const { Router } = require('express');

const investimentosRouter = Router();
const investimentosController = require('../controllers/investimentoController');

investimentosRouter.post('/comprar', investimentosController.postCompraAtivoController);
investimentosRouter.post('/vender', investimentosController.postvenderAtivoController);

module.exports = investimentosRouter;
