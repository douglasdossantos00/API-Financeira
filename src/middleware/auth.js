const { authenticateToken } = require('../utils/jwt');
const AppError = require('./Error');

const authenticateMiddleware = async (request, _response, next) => {
  const token = request.headers.authorization;
  const data = await authenticateToken(token);
  if (!data) {
    throw new AppError('Token not found', 401);
  }
  request.user = JSON.parse(data.user); // os dados do usuario alocados no request
  next();
};
module.exports = authenticateMiddleware;
