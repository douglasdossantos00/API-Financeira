const { Router } = require('express');

const investimentosRouter = Router();

investimentosRouter.post('/comprar');
investimentosRouter.post('/vender');

module.exports = investimentosRouter;
