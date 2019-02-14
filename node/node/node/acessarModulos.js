const moduloA = require('../moduleA');
console.log(moduloA + "teste gi");

const saudacao = require('saudacao');
console.log(saudacao.ola);

const c = require('./pastaC/index');
console.log(c.ola2);
/*

const http = require('http')
http.createServer((req, res) => {
    res.write('bom dia')
    res.end();
}).listen(8080);

*/