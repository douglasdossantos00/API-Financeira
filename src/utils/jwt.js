const jwt = require('jsonwebtoken');
const AppError = require('../middleware/Error');
require('dotenv').config();

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '240h',
  algorithm: 'HS256',
};

const generateJWTToken = (user) => jwt.sign(user, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    throw new AppError('Token não existe', 401);
  }

  try {
    const validate = jwt.verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    console.log(error);
    throw new AppError('Token expirado ou não é válido', 401);
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};
