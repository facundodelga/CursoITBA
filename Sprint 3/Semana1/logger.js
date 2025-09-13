const fs = require('fs');


const log = (mensaje) => {
    console.log(mensaje);
    fs.appendFile('sistema.log', mensaje + '\n', (err) => {
        if (err) throw err;
    });
}

module.exports = log;