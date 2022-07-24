const { authenticateToken } = require('../utils/jwt');
const AppError = require('./Error');

const authenticateMiddleware = async (request, _response, next) => {
  const token = request.headers.authorization;
  if (token === '' || !token) {
    throw new AppError('Token não encontrado', 401);
  }
  const tokenBearer = token.split(' ')[1];
  const data = await authenticateToken(tokenBearer);
  if (!data) {
    throw new AppError('Token não encontrado', 401);
  }
  request.user = data; // os dados do usuario aloca
  next();
};
module.exports = authenticateMiddleware;
