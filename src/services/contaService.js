const { Conta } = require('../database/models');
const AppError = require('../middleware/Error');

const getContaService = async (codCliente) => {
  const getCliente = await Conta.findOne({ where: { idUser: codCliente } });
  if (!getCliente) {
    throw new AppError('Conta não encontrada');
  }
  return getCliente;
};

const incrementContaService = async (codCliente, valor) => {
  const { idUser } = await getContaService(codCliente);
  if (valor <= 0) {
    throw new AppError('Quantidade a ser depositada não pode ser menor ou igual a zero');
  }
  await Conta.increment({ saldo: valor }, { where: { idUser } });
  const { dataValues } = await getContaService(codCliente);
  const { id, saldo: saldoAtualizado } = dataValues;
  return { id, saldoAtualizado };
};

const decrementContaService = async (codCliente, valor) => {
  const { idUser, saldo } = await getContaService(codCliente);
  if (valor <= 0 || valor > saldo) {
    throw new AppError('Quantidade a ser sacada não pode ser maior que o saldo da conta e não pode ser menor ou igual a zero');
  }
  await Conta.increment({ saldo: -valor }, { where: { idUser } });
  const { dataValues } = await getContaService(codCliente);
  const { id, saldo: saldoAtualizado } = dataValues;
  return { id, saldoAtualizado };
};

module.exports = { getContaService, incrementContaService, decrementContaService };
