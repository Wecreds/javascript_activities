//Recebe um preço e sua porcentagem de desconto, e retorna o novo preço.

const pre = parseInt(prompt(`Digite o preço`))

const desc = parseInt(prompt(`Digite o desconto`))

const tot = ((desc / 100) * pre)

document.write(`Aplicando o desconto, o preço final ${tot} reais.`)