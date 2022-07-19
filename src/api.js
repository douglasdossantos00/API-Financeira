require('express-async-errors');
const express = require('express');

const app = express();
const router = ('./routers');

app.use(express.json());
app.use(router);

module.exports = app;
