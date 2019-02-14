function MeuObjeto() {
}


console.log((new MeuObjeto).__phto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__phto__ === Function.prototype);
console.log(Function.prototype.__phto__ === Object.prototype);
console.log(Object.prototype.__phto__ === null)