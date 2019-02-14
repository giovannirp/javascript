const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad', preco: 41988, fragil: true},
    { nome: 'copo de vitro', preco: 12.49, fragil: true},
    { nome: 'copo de plástico', preco: 18.99, fragil: false}
];

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil))