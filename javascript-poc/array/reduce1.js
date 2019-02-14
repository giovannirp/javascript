const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Mario', nota: 8.3, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 6.1, bolsista: false}
];

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 0);

console.log(resultado)