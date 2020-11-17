'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const app = express();

const router = express.Router();
app.use(cors());

//Connect to Mongo
mongoose.connect(config.connectionString);


// Carrega Models
const Pessoa = require('./models/pessoa-model');
const Login = require('./models/login-model');
const Produto = require('./models/produto-model');

// Carrega as rotas
const pessoaRoute = require('./routes/pessoa-route');
const loginRoute = require('./routes/login-route');
const produtoRoute = require('./routes/produto-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/pessoa', pessoaRoute);
app.use('/login', loginRoute);
app.use('/produto', produtoRoute);


module.exports = app;