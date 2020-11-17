const repository = require('../repositories/login-repository');

class LoginController {

    constructor() {}

    async post(req, res, next) {


        try {
            let login = req.body;
            var result = await repository.create(login);
            console.log(result);
            return res.status(201).send({
                message: `Dados de login inserido com sucesso: ${result}`
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Falha ao processar sua requisição',
                error: `${error}`
            });

        }
    }

    async logar(req, res, next) {
        try {
            var data = await repository.get(req.body);
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
                message: 'Dados de login atualizados com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    };

}


module.exports = new LoginController;