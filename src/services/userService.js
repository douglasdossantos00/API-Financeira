require('dotenv').config();
const generateJWTToken = require('../utils/jwt');

const {
  User, Conta,
} = require('../database/models');
const AppError = require('../middleware/Error');

/* const createUserService = async (email, senha) => {
  const user = await User.create({ email, senha });
  if (!user) {
    throw new AppError('Usuário não encontrado');
  }

  return user;
}; */

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

  return { status: 201, token };
};

const getUserContaService = async (idUser) => {
  const idConta = await Conta.findOne({
    where: { idUser },
  });
  if (!idConta) {
    throw new AppError('Cliente não possui conta');
  }
  return idConta.dataValues.id;
};

module.exports = { getUserService, getUserContaService };
