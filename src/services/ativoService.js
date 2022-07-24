const { Ativo, sequelize } = require('../database/models');
const AppError = require('../middleware/Error');
const contaService = require('./contaService');

const getAllAtivosService = async () => {
  const allAtivos = await Ativo.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
  return allAtivos;
};

const getAllAtivosUserService = async (codCliente) => {
  const conta = await contaService.getContaService(codCliente);
  if (!conta) {
    throw new AppError('Conta não encontrada');
  }
  const allAtivosUser = await sequelize.query(`SELECT C.idUser, A.id,
  A.codAtivo, A.valor, AC.qtdeAtivo, AC.qtdeAtivo * A.valor as ValorInvestido  FROM desafio_xp_dev.AtivosContas as AC
  join desafio_xp_dev.Ativos as A on AC.idAtivo = A.id
  join desafio_xp_dev.Contas as C on AC.idConta = C.idUser
  where C.idUser = ${codCliente}`);
  return allAtivosUser[0];
};

const getAtivoByIdService = async (codAtivo) => {
  const ativo = await Ativo.findOne({
    where: { id: codAtivo },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
  if (!ativo) {
    throw new AppError('Ativo indisponível', 404);
  }
  return ativo;
};
module.exports = { getAllAtivosService, getAllAtivosUserService, getAtivoByIdService };
