const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

app.use('/', indexRoutes);
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));