const pilotos = ['vettel', 'Alonso', 'riki', 'Massa'];
pilotos.pop()
console.log(pilotos)

pilotos.push('Vertappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hammiton')
console.log(pilotos);

pilotos.slice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
