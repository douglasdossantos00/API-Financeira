const userService = require('../services/userService');

const getUserController = async (req, res) => {
  const { email, senha } = req.body;
  console.log(email.senha);

  const getUser = await userService.getUserService(email, senha);
  res.status(200).json(getUser);
};

const getAllAtivosUserController = async (req, res) => {
  const idUser = 1;
  const allAtivosUser = await userService.getAllAtivosUserService(idUser);
  res.status(200).json(allAtivosUser);
};
module.exports = { getUserController, getAllAtivosUserController };
