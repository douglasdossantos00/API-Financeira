const ativoContaService = require('../services/investimentosService');

const getAllAtivosContasController = async (request, response) => {
  const allAtivosContas = await ativoContaService.getAllAtivosContasService();
  response.status(200).json(allAtivosContas);
};

const postCompraAtivoController = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  await ativoContaService.postCompraAtivoService(codCliente, codAtivo, qtdeAtivo);
  res.status(200).send();
};
const postvenderAtivoController = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  await ativoContaService.postVenderAtivoService(codCliente, codAtivo, qtdeAtivo);
  res.status(200).send();
};

module.exports = {
  getAllAtivosContasController,
  postCompraAtivoController,
  postvenderAtivoController,
};
