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

const getContaController = async (req, res) => {
  const { codCliente } = req.params;
  const { id, saldo } = await contaService.getContaService(codCliente);
  res.status(200).json({ id, saldo });
};

module.exports = { postDepositoContaController, postSaqueContaController, getContaController };
