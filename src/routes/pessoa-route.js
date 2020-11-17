const express = require('express');
const router = express.Router();
const controller = require('../controllers/pessoa-controller');



router.post('/createPessoa', controller.cadastro);
router.post('/create', controller.post);
router.get('/getPessoas', controller.get);
router.get('/:id', controller.getById);
router.put('/:id', controller.getById);

module.exports = router;