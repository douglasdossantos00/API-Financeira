require('dotenv').config();
const generateJWTToken = require('../utils/jwt');

const {
  User,
} = require('../database/models');
const AppError = require('../middleware/Error');

const getUserService = async (email, senha) => {
  const user = await User.findOne(
    {
      where: { email, senha },
      attributes: { exclude: 'senha, createdAt, updatedAt' },
    },
  );
  if (!user) {
    throw new AppError('Usuário não encontrado');
  }

  const token = generateJWTToken.generateJWTToken(user.dataValues);

  return { token };
};

module.exports = { getUserService };
