const express = require('express');
const router = express.Router();
const controller = require('../controllers/login-controller');



router.post('/createLogin', controller.post);
router.get('/:id', controller.getById);
router.put('/:id', controller.put);
router.post('/logar', controller.logar);

module.exports = router;