const fs = require('fs');
module.exports = {
  readFile: (f) => fs.readFileSync(f, 'utf8'),
  writeFile: (f, d) => fs.writeFileSync(f, d)
};
