const repository = require('../repositories/pessoa-repository');
const cadastroPessoaService = require("../services/cadastrousuario-service");

class PessoaController {

    constructor() {}

    async post(req, res, next) {

        try {
            let pessoa = req.body;
            var result = await repository.create(pessoa);
            console.log(result);
            return res.status(201).send({
                message: `Pessoa cadastrada com sucesso: ${result}`
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Falha ao processar sua requisição',
                error: `${error}`
            });

        }
    }

    async cadastro(req, res, next) {

        try {
            let pessoa = req.body;
            var result = await cadastroPessoaService.cadastro(pessoa);
            console.log(result);

            return res.status(201).json({
                sucess: true,
                message: `Pessoa/Usuario cadastrados com sucesso`,
                data: result
            });

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Falha ao processar sua requisição',
                error: `${error}`
            });

        }
    }

    async get(req, res, next) {
        try {
            var data = await repository.get();
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição',
                error: `${error}`
            });

        }
    }


    async getById(req, res, next) {
        try {
            var data = await repository.getById(req.params.id);
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }

    async put(req, res, next) {
        try {
            await repository.update(req.params.id, req.body);
            res.status(200).send({
                message: 'Dados pessoais atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    };

}



module.exports = new PessoaController;