const userRepository = require("../repositories/login-repository");
const userModel = require("../models/login-model");

const pessoaRepository = require("../repositories/pessoa-repository");
const pessoaModel = require("../models/pessoa-model");



class CadastroServices {

    constructor() {}

    async cadastro(data) {
        try {

            let pessoa = await pessoaRepository.create(data.pessoa);

            var user = {
                username: data.login.username,
                password: data.login.password,
                pessoa: pessoa._id
            }

            let usuario = (await userRepository.create(user)).populate("pessoas");

            let result = {
                pessoa,
                usuario
            }

            return result;


        } catch (error) {
            console.log(error);

        }


    }

}

module.exports = new CadastroServices;