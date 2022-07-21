const contaService = require('../services/contaService');

const postContaController = async (request, response) => {
  // const { codCliente, valor } = request.body;
  const updateConta = await contaService.getContaService();
  response.status(200).json(updateConta);
};

module.exports = { postContaController };
