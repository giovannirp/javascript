const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Mario', nota: 8.3, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 6.1, bolsista: false}
];

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));



const algumBolsista = (resultado, bolsista) => resultado | bolsista;
console.log(algunos.map(a => a.bolsista).reduce(algumBolsista))