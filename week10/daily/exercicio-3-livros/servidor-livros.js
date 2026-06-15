const express = require('express');
const app = express();
app.use('/books', require('./routes/logica-livros'));
app.listen(3000);
