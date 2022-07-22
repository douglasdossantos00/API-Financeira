const userService = require('../services/userService');

const getUserController = async (req, res) => {
  const { email, senha } = req.body;
  const token = await userService.getUserService(email, senha);
  res.status(200).json(token);
};

module.exports = { getUserController };
