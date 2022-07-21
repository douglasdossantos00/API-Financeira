const generateJWTToken = require('../utils/jwt');
const {
  User, Conta, Ativo,
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
  const token = generateJWTToken(JSON.stringify(user));

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

const getAllAtivosUserService = async (idUser) => {
  const idConta = await getUserContaService(idUser);
  const getallAtivosUser = await Conta.findOne({
    attributes: ['idUser'],
    include: [
      {
        model: Ativo,
        as: 'ativos',
        through: { attributes: [] },
      },
    ],
    where: { id: idConta },
  });
  if (!getallAtivosUser) {
    throw new AppError('Não existem ativos', 404);
  }
  const allAtivosUser = getallAtivosUser.ativos.map((elem) => ({
    codCliente: idConta,
    codAtivo: elem.id,
    nomeAtivo: elem.codAtivo,
    valor: elem.valor,

  }));
  console.log(allAtivosUser);
  return allAtivosUser;
};

module.exports = { getUserService, getAllAtivosUserService, getUserContaService };
