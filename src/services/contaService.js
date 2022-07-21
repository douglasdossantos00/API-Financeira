const { Conta } = require('../database/models');

const getContaService = async () => {
  const getCliente = await Conta.findAll({
    attributes: { exclude: ['idConta,idCliente'] },
  });

  return getCliente;
};

/* const updateContaService = async (codCliente, valor) => {
    await Conta.update(valor),
    {
        where: codCliente,
    }
} */

module.exports = { getContaService };
