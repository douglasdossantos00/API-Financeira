const ativoContaService = require('../services/ativosContasService');

const getAllAtivosContasController = async (request, response) => {
  console.log(request.body);
  const allAtivosContas = await ativoContaService.getAllAtivosContasService();
  response.status(200).json(allAtivosContas);
};

module.exports = { getAllAtivosContasController };
