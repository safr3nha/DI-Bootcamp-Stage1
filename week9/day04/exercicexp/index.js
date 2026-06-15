const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Bem-vindo à Homepage!'));
router.get('/about', (req, res) => res.send('Página Sobre Nós'));

module.exports = router;