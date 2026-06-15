const fm = require('./fileManager');
console.log(fm.readFile('Hello World.txt'));
fm.writeFile('Bye World.txt', 'Writing to the file');
