const ativoService = require('../services/ativoService');

const getAllAtivosController = async (request, response) => {
  const allAtivos = await ativoService.getAllAtivosService();
  response.status(201).json(allAtivos);
};

const getAllAtivosUserController = async (req, res) => {
  const { codCliente } = req.params;
  const allAtivosUser = await ativoService.getAllAtivosUserService(codCliente);
  res.status(200).json(allAtivosUser);
};

const getAtivoByIdService = async (req, res) => {
  const { codAtivo } = req.params;
  const ativo = await ativoService.getAtivoByIdService(codAtivo);
  res.status(200).json(ativo);
};

module.exports = { getAllAtivosController, getAllAtivosUserController, getAtivoByIdService };
