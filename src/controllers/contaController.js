const contaService = require('../services/contaService');

const postDepositoContaController = async (req, res) => {
  const { codCliente, valor } = req.body;
  const conta = await contaService.incrementContaService(codCliente, valor);
  res.status(200).json(conta);
};

const postSaqueContaController = async (req, res) => {
  const { codCliente, valor } = req.body;
  const conta = await contaService.decrementContaService(codCliente, valor);
  res.status(200).json(conta);
};

const getContaController = async (req, res) => {
  const { codCliente } = req.params;
  const { id, saldo } = await contaService.getContaService(codCliente);
  res.status(200).json({ id, saldo });
};

module.exports = { postDepositoContaController, postSaqueContaController, getContaController };
