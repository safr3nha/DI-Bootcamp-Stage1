const express = require('express');
const app = express();
app.use('/todos', require('./routes/gerenciador-tarefas'));
app.listen(3000);
