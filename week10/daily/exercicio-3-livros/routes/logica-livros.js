const express = require('express');
const router = express.Router();
let acervo = [];
router.get('/', (req, res) => res.json(acervo));
router.post('/', express.json(), (req, res) => {
    const livro = { id: Date.now().toString(), titulo: req.body.titulo };
    acervo.push(livro);
    res.status(201).json(livro);
});
module.exports = router;
