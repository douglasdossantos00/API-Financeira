const { AtivoConta } = require('../database/models');

const getAllAtivosContasService = async () => {
  const allAtivos = await AtivoConta.findAll({
    attributes: { exclude: ['id '] },
  });
  return allAtivos;
};
module.exports = { getAllAtivosContasService };
