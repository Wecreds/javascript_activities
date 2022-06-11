// decomporNumero - Leia um número inteiro menor que 1000 e devolva a quantidade de centenas, dezenas e unidades do mesmo. Obs.: não utilize operações com strings.

const total = parseInt(prompt(`Digite um numero menor que 1000`))

const centenas = total / 100

const dezenas = total / 10

document.write(`${total} Possue ${Math.floor(centenas)} centenas, ${Math.floor(dezenas)} dezenas, e ${Math.floor(total)} unidades.`)