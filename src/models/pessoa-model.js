const mongoose = require('mongoose');
const Pessoa = mongoose.Schema;


const pessoa = new Pessoa({

    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    hashId: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    endereco: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true,
        enum: ['Masculino', 'Feminino', 'Indefinido'],
        default: 'Indefinido'
    }

});


module.exports = mongoose.model('Pessoa', pessoa);