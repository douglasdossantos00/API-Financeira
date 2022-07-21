const { Ativo } = require('../database/models');

const getAllAtivosService = async () => {
  const allAtivos = await Ativo.findAll({
    attributes: { exclude: ['id '] },
  });
  return allAtivos;
};
module.exports = { getAllAtivosService };
