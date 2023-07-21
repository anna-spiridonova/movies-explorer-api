require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const { mongoAdress } = require('./utils/constants');

const { PORT = 3000, DB_ADRESS, NODE_ENV } = process.env;
// const { PORT = 3001, DB_ADRESS, NODE_ENV } = process.env;

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://movies.project.nomoreparties.sbs',
    'https://api.movies.project.nomoreparties.sbs',
    'http://movies.project.nomoreparties.sbs',
    'http://api.movies.project.nomoreparties.sbs',
  ],
  credentials: true,
}));

app.use(helmet());

mongoose.connect(NODE_ENV !== 'production' ? mongoAdress : DB_ADRESS);

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);
app.use(limiter);

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
