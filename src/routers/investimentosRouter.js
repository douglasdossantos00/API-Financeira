const { Router } = require('express');

const investimentosRouter = Router();
const investimentosController = require('../controllers/investimentoController');
const auth = require('../middleware/auth');

investimentosRouter.post('/comprar', auth, investimentosController.postCompraAtivoController);
investimentosRouter.post('/vender', auth, investimentosController.postvenderAtivoController);

module.exports = investimentosRouter;
