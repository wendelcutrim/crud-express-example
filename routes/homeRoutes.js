const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.showPaginaInicial);

router.get('/contato', HomeController.showContato);

router.get('/renildo', HomeController.showRenildo);

router.get('/login', HomeController.showLogin);

router.get('/cadastrar/produto', HomeController.showCadastroProduto);

router.post('/cadastrar/produto', HomeController.storeProduto);



module.exports = router;

