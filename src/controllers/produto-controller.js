const repository = require("../repositories/produto-repository");


class ProdutoController {

    constructor() {}

    async get(req, res, next) {
        try {
            var data = await repository.get();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição',
                error: e
            });
        }
    }


    async getBySlug(req, res, next) {
        try {
            var data = await repository.getBySlug(req.params.slug);
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
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

    async getByTag(req, res, next) {
        try {
            const data = await repository.getByTag(req.params.tag);
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }


    async getByName(req, res, next) {
        try {
            const data = await repository.getByName(req.params.name);
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }

    async post(req, res, next) {


        try {
            // Cria o Blob Service - para a entrega final
            // const blobSvc = azure.createBlobService(config.containerConnectionString);

            /*let filename = guid.raw().toString() + '.jpg';
            let rawdata = req.body.image;
            let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            let type = matches[1];
            let buffer = new Buffer(matches[2], 'base64'); 

            // Salva a imagem
            await blobSvc.createBlockBlobFromText('product-images', filename, buffer, {
                contentType: type
            }, function (error, result, response) {
                if (error) {
                    filename = 'default-product.png'
                }
            }); */

            await repository.create({
                titulo: req.body.titulo,
                slug: req.body.slug,
                descricao: req.body.descricao,
                preco: req.body.preco,
                ativo: true,
                tags: req.body.tags,
                image: req.body.imagePath
            });
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        } catch (e) {
            console.log(e);
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }

    async put(req, res, next) {
        try {
            await repository.update(req.params.id, req.body);
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }

    async delete(req, res, next) {
        try {
            await repository.delete(req.body.id)
            res.status(200).send({
                message: 'Produto removido com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    };

}

module.exports = new ProdutoController;