const contaService = require('../services/contaService');

const postDepositoContaController = async (req, res) => {
  const { codCliente, valor } = req.body;
  await contaService.incrementContaService(codCliente, valor);
  res.status(200).send();
};

const postSaqueContaController = async (req, res) => {
  const { codCliente, valor } = req.body;
  await contaService.decrementContaService(codCliente, valor);
  res.status(200).send();
};

module.exports = { postDepositoContaController, postSaqueContaController };
