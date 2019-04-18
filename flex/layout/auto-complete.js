function autoComplete(cidade) {
 
 const destino = ['Salvador', 'Vitória', 'Maceió', 'Ceará','Rio Branco','Macapá', 'Porto Velho', 'Olinda','Aracaju','Capitólio','São Paulo', 'Paraty'];
         return destino.filter((valor) => {
                 const valorMinusculo = valor.toLowerCase()
                 const cidadeMinusculo = cidade.toLowerCase()
  
                 return valorMinusculo.includes(cidadeMinusculo)
           })
    }
   const campo = document.querySelector('.campo')
   const sugestoes = document.querySelector('.sugestoes')
  
   campo.addEventListener('input', ({ target }) => {
       const dadosDoCampo = target.value
       if(dadosDoCampo.length) {
          const autoCompleteValores = autoComplete(dadosDoCampo)
          sugestoes.innerHTML = `
             ${autoCompleteValores.map((value) => {
                 return (
                    `<li>${value}</li>`
                         )
              }).join('')}
            `
        }
 })