const Sequelize = require('sequelize');
const { development } = require('../database/config/config');
const { AtivoConta, Conta, Ativo } = require('../database/models');
const AppError = require('../middleware/Error');
const { getAtivoByIdService } = require('./ativoService');
const { getContaService } = require('./contaService');

const sequelize = new Sequelize(development);

const getAllAtivosContasService = async () => {
  const allAtivos = await AtivoConta.findAll({
    attributes: { exclude: ['id '] },
  });
  return allAtivos;
};

const getAtivoContaByIdAtivo = async (idAtivo, idConta) => {
  const ativoConta = await AtivoConta.findOrCreate({
    where: { idAtivo, idConta },
    defaults: {
      idAtivo,
      idConta,
      qtdeAtivo: 0,
    },
  });
  return ativoConta;
};

const postCompraAtivoService = async (codCliente, codAtivo, qtdeAtivo) => {
  const t = await sequelize.transaction();
  const ativo = await getAtivoByIdService(codAtivo);
  const conta = await getContaService(codCliente);
  const custoAtivos = (+ativo.valor * qtdeAtivo);
  console.log(ativo);
  if (ativo.qtdeAtivo < qtdeAtivo) {
    throw new AppError('Quantidade indisponível', 404);
  }
  if (conta.saldo < custoAtivos) {
    throw new AppError('Saldo insuficiente', 400);
  }
  await getAtivoContaByIdAtivo(ativo.id, conta.idUser);
  await AtivoConta.increment(
    { qtdeAtivo },
    { where: { idAtivo: ativo.id, idConta: conta.idUser } },
    { transaction: t },
  );
  await Conta.increment(
    { saldo: -custoAtivos },
    { where: { idUser: conta.idUser } },
    { transaction: t },
  );
  await Ativo.increment(
    { qtdeAtivo: -qtdeAtivo },
    { where: { id: ativo.id } },
    { transaction: t },
  );
  return postCompraAtivoService;
};

const postVenderAtivoService = async (codCliente, codAtivo, qtdeAtivo) => {
  const t = await sequelize.transaction();
  const ativo = await getAtivoByIdService(codAtivo);
  const conta = await getContaService(codCliente);
  const ativoConta = await getAtivoContaByIdAtivo(codAtivo, conta.idUser);
  if (ativoConta.qtdeAtivo < qtdeAtivo) {
    throw new AppError('Quantidade insuficiente');
  }

  const custoAtivos = (+ativo.valor * qtdeAtivo);
  await Conta.increment(
    { saldo: custoAtivos },
    { where: { idUser: conta.idUser } },
    { transaction: t },
  );
  await Ativo.increment(
    { qtdeAtivo },
    { where: { id: ativo.id } },
    { transaction: t },
  );
  await AtivoConta.increment(
    { qtdeAtivo: -qtdeAtivo },
    { where: { idAtivo: ativo.id, idConta: conta.idUser } },
    { transaction: t },
  );
  return postVenderAtivoService;
};

module.exports = { getAllAtivosContasService, postCompraAtivoService, postVenderAtivoService };
