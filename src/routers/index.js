const { Router } = require('express');

const userRouter = require('./clientesRouter');
const investimentosRouter = require('./investimentosRouter');
const ativoRouter = require('./ativosRouter');
const contaRouter = require('./contaRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/investimentos', investimentosRouter);
router.use('/ativos', ativoRouter);
router.use('/conta', contaRouter);

module.exports = router;
