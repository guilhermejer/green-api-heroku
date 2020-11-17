'use strict'
const {
    names
} = require('debug');
const mongoose = require('mongoose');
const Produto = require('../models/produto-model');

exports.get = async () => {
    const res = await Produto.find({
        ativo: true
    }, 'titulo preco descricao image');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Produto
        .findOne({
            slug: slug,
            ativo: true
        }, 'titulo descricao preco slug tags');
    return res;
}

exports.getByName = async (name) => {
    const res = await Produto
        .find({
            titulo: {
                $regex: '.*' + name + '.*'
            },
            ativo: true
        }, 'titulo descricao preco slug tags');
    return res;
}

exports.getById = async (id) => {
    const res = await Produto
        .findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = Produto
        .find({
            tags: tag,
            ativo: true
        }, 'titulo descricao preco slug tags');
    return res;
}

exports.create = async (data) => {
    var produto = new Produto(data);
    var result = await produto.save();
    return result;
}

exports.update = async (id, data) => {
    await Produto
        .findByIdAndUpdate(id, {
            $set: {
                titulo: data.titulo,
                descricao: data.descricao,
                preco: data.preco,
                slug: data.slug
            }
        });
}

exports.delete = async (id) => {
    await Produto
        .findOneAndRemove(id);
}