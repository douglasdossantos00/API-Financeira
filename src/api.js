require('express-async-errors');
const express = require('express');
const AppError = require('./middleware/Error');

const app = express();
const router = require('./routers');

app.use(express.json());
app.use(router);

app.use((err, _request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  if (!err.statusCode) {
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
  return next();
});

module.exports = app;
