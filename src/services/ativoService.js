const { Ativo, sequelize } = require('../database/models');
const AppError = require('../middleware/Error');

const getAllAtivosService = async () => {
  const allAtivos = await Ativo.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
  return allAtivos;
};

const getAllAtivosUserService = async (codCliente) => {
  const allAtivosUser = await sequelize.query(`SELECT C.idUser, A.id,
  A.codAtivo, AC.qtdeAtivo, A.valor FROM desafio_xp_dev.AtivosContas as AC
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
    throw new AppError('Ativo indisponível');
  }
  return ativo;
};
module.exports = { getAllAtivosService, getAllAtivosUserService, getAtivoByIdService };
