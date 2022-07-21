const ativoService = require('../services/ativoService');

const getAllAtivosController = async (request, response) => {
  // const { email } = request.body;
  const allAtivos = await ativoService.getAllAtivosService();
  response.status(201).json(allAtivos);
};

module.exports = { getAllAtivosController };
