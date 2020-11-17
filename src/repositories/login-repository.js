'use strict';
const mongoose = require('mongoose');
const Login = require('../models/login-model');


exports.get = async (data) => {
    const res = await Login.findOne({
        username: data.username,
        password: data.password,
        ativo: true
    });
    return res;
}

exports.getById = async (id) => {
    const res = await Login
        .findById(id);
    return res;
}


exports.create = async (data) => {
    var login = new Login(data);
    var result = await login.save();
    return result;
}