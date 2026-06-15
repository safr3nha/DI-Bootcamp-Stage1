const express = require('express');
const router = express.Router();
let tarefas = [];
router.get('/', (req, res) => res.json(tarefas));
router.post('/', express.json(), (req, res) => {
    const nova = { id: Date.now().toString(), tarefa: req.body.tarefa };
    tarefas.push(nova);
    res.status(201).json(nova);
});
module.exports = router;