const mongoose = require('mongoose');
const Produto = mongoose.Schema;

const produto = new Produto({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Produtos', produto);