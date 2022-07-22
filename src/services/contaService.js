const { Conta } = require('../database/models');
const AppError = require('../middleware/Error');

const getContaService = async (codCliente) => {
  const getCliente = await Conta.findOne({ where: { idUser: codCliente } });
  if (!getCliente) {
    throw new AppError('Conta não encontrada', 404);
  }
  return getCliente;
};

const incrementContaService = async (codCliente, valor) => {
  const { idUser } = await getContaService(codCliente);
  if (valor <= 0) {
    throw new AppError('Solicitação inválida');
  }
  const findConta = await Conta.increment({ saldo: valor }, { where: { idUser } });
  return findConta;
};

const decrementContaService = async (codCliente, valor) => {
  const { idUser, saldo } = await getContaService(codCliente);
  console.log(saldo);
  if (valor <= 0 || valor > saldo) {
    throw new AppError('Solicitação inválida');
  }
  const findConta = await Conta.increment({ saldo: -valor }, { where: { idUser } });
  return findConta;
};

module.exports = { getContaService, incrementContaService, decrementContaService };
