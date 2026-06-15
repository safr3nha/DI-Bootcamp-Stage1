const _ = require('lodash'); // Importa o lodash que você baixou
const math = require('./math'); // Importa o seu arquivo math.js

// Usando sua função de soma
console.log("Soma:", math.add(10, 5));

// Usando uma função do lodash (capitalize coloca a primeira letra em maiúsculo)
console.log("Lodash:", _.capitalize('node.js'));