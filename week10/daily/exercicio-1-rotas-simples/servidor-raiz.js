const express = require('express');
const app = express();
app.use('/', require('./routes/rotas-iniciais'));
app.listen(3000);
