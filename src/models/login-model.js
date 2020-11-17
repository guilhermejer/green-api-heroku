const mongoose = require('mongoose');
const Login = mongoose.Schema;


const login = new Login({

    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    },
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoas'
    },
});

module.exports = mongoose.model('Login', login);