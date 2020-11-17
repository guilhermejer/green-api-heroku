const mongoose = require('mongoose');
const Ordem = mongoose.Schema;

const ordem = new Ordem({
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoas'
    },
    numero: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantidade: {
            type: Number,
            required: true,
            default: 1
        },
        preco: {
            type: Number,
            required: true
        },
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produtos'
        }
    }],
});

module.exports = mongoose.model('Ordem', ordem);