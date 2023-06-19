// require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// const { errors } = require('celebrate');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
// const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(cookieParser());
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(PORT);
